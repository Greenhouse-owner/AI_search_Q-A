# AI 搜索应用

本项目基于 [Qwen-Agent](https://github.com/QwenLM/Qwen-Agent) 实现了 AI 搜索类应用的全流程迭代，核心可总结为 "三层架构 + 五版迭代 + 四场景覆盖"：

- **三层架构**：Qwen-Agent 的 RAG 三级架构（基础检索→分块阅读→逐步推理），解决不同复杂度的检索需求；
- **四场景覆盖**：长对话、多文档并行、多智能体切换、自动路由，覆盖客服、研发、办公等核心业务场景。

## 功能特性

### 核心能力

1. **文档问答**：基于本地文档集合进行精准问答，支持多种格式（PDF、TXT等）
2. **搜索引擎集成**：当本地文档无相关内容时，可自动调用 Tavily 搜索引擎获取最新信息
3. **向量检索**：使用 Dashscope 的 text-embedding-v4 模型进行语义级别的文档检索
4. **图形界面**：基于 Gradio 构建友好的 Web UI，提升用户体验

### 技术架构

- **底层检索**：Elasticsearch 作为核心搜索引擎，支持关键词和向量检索
- **大语言模型**：集成阿里云 Dashscope 平台的 Qwen 系列模型
- **RAG系统**：基于 Qwen-Agent 的完整 RAG 流程，包括文档解析、分块、索引和检索
- **工具集成**：通过 MCP 协议集成外部工具（如 Tavily 搜索）

## 快速开始

### 环境依赖

- Python 3.8+
- Elasticsearch 8.x
- Dashscope API Key
- Tavily API Key (可选)

### 安装步骤

1. 克隆项目：
   ```
   git clone <repository-url>
   cd AI搜索应用
   ```

2. 安装依赖：
   ```
   pip install -r requirements.txt
   ```

3. 配置环境变量：
   ```bash
   export DASHSCOPE_API_KEY=your_dashscope_api_key
   export ELASTICSEARCH_PASSWORD=your_elastic_password
   export TAVILY_API_KEY=your_tavily_api_key
   ```

4. 准备文档数据：
   将需要检索的文档放入 [docs](file:///C:/Users/Administrator/Desktop/AI%E6%90%9C%E7%B4%A2%E5%BA%94%E7%94%A8/docs) 目录，支持 PDF 和 TXT 格式

5. 启动应用：
   ```bash
   python ai_bot.py
   ```

访问 `http://localhost:7860` 查看图形界面。

## 版本演进

### V1 - 单文件检索
基础版本，支持对单个文档进行问答

### V2 - 海量 ES 索引
扩展为支持大量文档的 Elasticsearch 检索系统

### V3 - 向量检索
引入语义搜索能力，通过 embedding 提升检索准确性

### V4 - 外部 MCP 工具集成
集成 Tavily 搜索工具，实现本地知识库+互联网搜索的混合检索

### V5 - Gradio 美化
优化用户界面，提供现代化的交互体验

## 应用场景

1. **企业知识库问答**：员工可通过自然语言快速查找公司政策、产品资料等信息
2. **客服系统**：基于 FAQ 文档自动回答客户问题，提高服务效率
3. **研究助手**：研究人员可快速从大量文献中提取所需信息
4. **办公自动化**：结合文档处理工具，实现智能化办公

## 项目结构

```
.
├── docs/                  # 文档存储目录
├── qwen_agent/            # Qwen-Agent 核心模块
├── static/                # 静态资源（CSS、图片等）
├── ai_bot.py              # 主应用入口，包含 Gradio 界面
├── index_and_search_docs.py      # 基础 ES 检索实现
├── index_and_search_docs-embedding.py  # 向量检索实现
└── ...
```

## 配置说明

主要配置项位于 [ai_bot.py](file:///C:/Users/Administrator/Desktop/AI%E6%90%9C%E7%B4%A2%E5%BA%94%E7%94%A8/ai_bot.py) 中的 `init_agent_service` 函数：

- `llm_cfg`: 大语言模型配置
- `rag_cfg`: RAG 系统配置，包括 Elasticsearch 连接参数
- `tools_cfg`: 外部工具配置，如 Tavily 搜索

## 开发指南

### 添加新功能

1. 自定义工具：参考 `MyImageGen` 类实现方式，在 [qwen-agent-multi-files-gui.py](file:///C:/Users/Administrator/Desktop/AI%E6%90%9C%E7%B4%A2%E5%BA%94%E7%94%A8/qwen-agent-multi-files-gui.py) 中注册新工具
2. 新的检索策略：可在 [qwen_agent/tools/](file:///C:/Users/Administrator/Desktop/AI%E6%90%9C%E7%B4%A2%E5%BA%94%E7%94%A8/qwen_agent/tools/) 目录下实现自定义检索工具
3. 界面定制：修改 [static/styles.css](file:///C:/Users/Administrator/Desktop/AI%E6%90%9C%E7%B4%A2%E5%BA%94%E7%94%A8/static/styles.css) 和 [ai_bot.py](file:///C:/Users/Administrator/Desktop/AI%E6%90%9C%E7%B4%A2%E5%BA%94%E7%94%A8/ai_bot.py) 中的 Gradio 界面代码

### 测试方法

运行不同的测试脚本验证各项功能：

```bash
# 测试基础文档检索
python index_and_search_docs.py

# 测试向量检索
python index_and_search_docs-embedding.py

# 测试多文件问答
python qwen-agent-multi-files.py
```

## 许可证

本项目基于 Apache License 2.0 开源协议，请遵守相应规定。
