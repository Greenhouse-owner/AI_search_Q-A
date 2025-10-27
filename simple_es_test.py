# -*- coding: utf-8 -*-
# simple_es_test.py
# A minimal, dependency-free script to test the core functionality of Elasticsearch.
# This script does NOT use any code from the qwen_agent library.

import logging
import sys
import os
from elasticsearch import Elasticsearch
import warnings
warnings.filterwarnings("ignore")

# 1. 配置
# =============================================
ES_HOST = "http://localhost"
ES_PORT = 9200
ES_USER = "elastic"
ES_PASSWORD = os.getenv('ELASTICSEARCH_PASSWORD', 'your_elastic_password')  # 从环境变量获取密码
INDEX_NAME = "minimal_test_index"     # 使用一个全新的、干净的索引
FILE_TO_TEST = "docs/2-雇主责任险.txt"
QUERY = "雇主责任险"

# 设置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    stream=sys.stdout  # 强制日志输出到控制台
)

# 2. 连接到 Elasticsearch
# =============================================
logging.info("--- 步骤 1: 正在连接到 Elasticsearch ---")
try:
    es_client = Elasticsearch(
        hosts=[{'host': 'localhost', 'port': ES_PORT, 'scheme': 'http'}],
        basic_auth=(ES_USER, ES_PASSWORD),
        verify_certs=False,  # 仅用于本地测试
        request_timeout=30
    )
    # 检查连接
    if not es_client.ping():
        raise ConnectionError("Ping 失败，请检查 ES 服务是否正常运行。")
    logging.info("连接成功！")
except Exception as e:
    logging.error(f"连接失败: {e}")
    exit()

# 3. 创建或清理索引
# =============================================
logging.info(f"--- 步骤 2: 准备索引 '{INDEX_NAME}' ---")
try:
    # 为了保证测试的纯净性，如果索引存在，先删除它
    if es_client.indices.exists(index=INDEX_NAME):
        logging.warning(f"索引 '{INDEX_NAME}' 已存在，将删除重建以进行干净的测试。")
        es_client.indices.delete(index=INDEX_NAME)
    
    # 定义包含 IK 分词器的索引设置
    index_settings = {
        # "settings": {"analysis": {"analyzer": {"default": {"type": "ik_max_word"}}}},
        "mappings": {"properties": {"content": {"type": "text"}}}
    }
    
    # 创建新索引
    es_client.indices.create(index=INDEX_NAME, body=index_settings)
    logging.info(f"索引 '{INDEX_NAME}' 创建成功。")

except Exception as e:
    logging.error(f"索引准备失败: {e}")
    exit()

# 4. 读取文件并索引内容
# =============================================
logging.info(f"--- 步骤 3: 正在读取和索引文件 '{FILE_TO_TEST}' ---")
try:
    with open(FILE_TO_TEST, 'r', encoding='utf-8') as f:
        file_content = f.read()
    
    if not file_content.strip():
        raise ValueError("文件内容为空。")

    # 将整个文件内容作为一个文档进行索引
    doc_id = "1"  # 恢复为字符串类型
    es_client.index(index=INDEX_NAME, id=doc_id, document={"content": file_content}, refresh=True)
    logging.info(f"文件内容已成功索引到文档 ID: {doc_id}")

except Exception as e:
    logging.error(f"读取或索引文件时出错: {e}")
    exit()

# 5. 执行搜索
# =============================================
logging.info(f"--- 步骤 4: 使用查询 '{QUERY}' 执行搜索 ---")
try:
    search_body = {
        "query": {
            "match": {
                "content": QUERY
            }
        }
    }
    response = es_client.search(index=INDEX_NAME, body=search_body)
    
    hits = response.get('hits', {}).get('hits', [])
    
    logging.info("--- 搜索完成 ---")
    if not hits:
        logging.warning("搜索没有返回任何结果。")
    else:
        logging.info(f"成功找到 {len(hits)} 个结果！")
        for i, hit in enumerate(hits):
            logging.info(f"\\n--- 结果 {i+1} ---")
            logging.info(f"得分 (Score): {hit['_score']}")
            logging.info(f"内容预览: {hit['_source']['content'][:300]}...")

except Exception as e:
    logging.error(f"搜索时出错: {e}")

logging.info("\\n--- 测试结束 ---")