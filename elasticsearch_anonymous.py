# -*- coding: utf-8 -*-
import requests
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

try:
    print("尝试获取 Elasticsearch 的基本信息（无需认证）")
    # 尝试访问不需要认证的端点
    endpoints = [
        'http://localhost:9200/_cluster/health',
        'http://localhost:9200/_nodes/stats',
        'http://localhost:9200/_cat/indices',
        'http://localhost:9200/_security/_authenticate'
    ]
    
    for endpoint in endpoints:
        try:
            print(f"\nTesting endpoint: {endpoint}")
            response = requests.get(
                endpoint,
                verify=False,
                timeout=5
            )
            print(f"Status Code: {response.status_code}")
            if response.status_code == 200:
                print(f"Response: {response.text[:300]}...")
            elif response.status_code == 401:
                print("Authentication required")
            else:
                print(f"Failed with status {response.status_code}")
        except Exception as e:
            print(f"Error: {e}")
            
except Exception as e:
    print(f"General error: {e}")