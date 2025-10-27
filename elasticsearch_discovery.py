# -*- coding: utf-8 -*-
import requests
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# 测试不同的端口和路径组合
endpoints = [
    'http://localhost:9200/',
    'http://localhost:9300/',
    'http://127.0.0.1:9200/',
    'http://127.0.0.1:9300/',
    'https://localhost:9200/',
    'https://127.0.0.1:9200/',
]

for endpoint in endpoints:
    try:
        print(f"Testing endpoint: {endpoint}")
        response = requests.get(
            endpoint,
            auth=('elastic', '7fo0wkD0bt*pivZLqg7p'),
            verify=False,
            timeout=5
        )
        print(f"  Status Code: {response.status_code}")
        if response.status_code == 200:
            print(f"  SUCCESS! Found Elasticsearch at {endpoint}")
            print(f"  Response: {response.text[:200]}...")
            break
        elif response.status_code == 401:
            print(f"  Authentication required at {endpoint}")
        else:
            print(f"  Failed with status {response.status_code}")
    except requests.exceptions.SSLError as e:
        print(f"  SSL Error: {e}")
    except requests.exceptions.ConnectionError as e:
        print(f"  Connection Error: {e}")
    except Exception as e:
        print(f"  Other Error: {e}")
    print("-" * 50)