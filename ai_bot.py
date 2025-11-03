# ai_bot.py
import os
import asyncio
from typing import Optional, Generator, List, Dict, Any, Union
from qwen_agent.agents import Assistant
from qwen_agent.tools.base import BaseTool, register_tool
from qwen_agent.gui import WebUI
import warnings
import gradio as gr  # type: ignore
import time
import base64
import urllib.parse
import json5  # type: ignore
from es_retrieval_tool import ElasticsearchRetrievalTool

warnings.filterwarnings("ignore")

# 步骤 1：添加一个名为 `my_image_gen` 的自定义工具。
@register_tool('my_image_gen')
class MyImageGen(BaseTool):
    # `description` 用于告诉智能体该工具的功能。
    description = 'AI 绘画（图像生成）服务，输入文本描述，返回基于文本信息绘制的图像 URL。'
    # `parameters` 告诉智能体该工具有哪些输入参数。
    parameters = [{
        'name': 'prompt',
        'type': 'string',
        'description': '期望的图像内容的详细描述',
        'required': True
    }]

    def call(self, params: Union[str, Dict], **kwargs) -> str:
        # `params` 是由 LLM 智能体生成的参数。
        if isinstance(params, dict):
            prompt = params['prompt']
        else:
            prompt = json5.loads(params)['prompt']
        prompt = urllib.parse.quote(prompt)
        return json5.dumps(
            {'image_url': f'https://image.pollinations.ai/prompt/{prompt}'},
            ensure_ascii=False)


def init_agent_service(mode: str = "full"):
    """初始化助手服务"""
    # 步骤 2：配置您所使用的 LLM。
    llm_cfg = {
        'model': 'qwen-max',
        'model_server': 'dashscope',
        'api_key': os.getenv('DASHSCOPE_API_KEY'),
        'generate_cfg': {
            'top_p': 0.8
        }
    }

    # 获取文件夹下所有文件
    file_dir = os.path.join(os.path.dirname(__file__), 'docs')
    files = []
    if os.path.exists(file_dir):
        for file in os.listdir(file_dir):
            file_path = os.path.join(file_dir, file)
            if os.path.isfile(file_path):
                files.append(file_path)
    print('知识库文件列表:', files)

    if mode == "simple":
        # 简单模式：仅图像生成和代码解释器
        system_instruction = '''你是一个乐于助人的AI助手。
在收到用户的请求后，你应该：
- 首先绘制一幅图像，得到图像的url，
- 然后运行代码`request.get`以下载该图像的url，
- 最后从给定的文档中选择一个图像操作进行图像处理。
用 `plt.show()` 展示图像。
你总是用中文回复用户。'''
        tools_list: List[Union[str, Dict, BaseTool]] = ['my_image_gen', 'code_interpreter']
        
        bot = Assistant(llm=llm_cfg,
                        system_message=system_instruction,
                        function_list=tools_list,
                        files=files)
        return bot

    elif mode == "elasticsearch":
        # Elasticsearch模式：使用自定义Elasticsearch检索工具
        system_instruction = '''你是一个乐于助人的AI助手。
在收到用户的请求后，你应该：
- 首先，根据用户的问题，调用检索工具从知识库中查找相关信息。
- 然后，结合检索到的信息和你的知识，生成一个全面、准确的回答。
- 如果用户要求画图，请调用`my_image_gen`工具。
你总是用中文回复用户。'''

        # 实例化我们自定义的 ES 检索工具
        es_retrieval = ElasticsearchRetrievalTool(cfg={
            'password': 'your_password' 
        })

        # 定义智能体要使用的工具列表
        tools_list = [es_retrieval, 'my_image_gen', 'code_interpreter']  # type: ignore
        
        bot = Assistant(llm=llm_cfg,
                        system_message=system_instruction,
                        function_list=tools_list,
                        files=files)
        return bot

    elif mode == "rag":
        # RAG模式：基础Elasticsearch RAG
        system_instruction = '''你是一个基于本地知识库的AI助手。
请根据用户的问题，利用检索工具从知识库中查找最相关的信息，并结合这些信息给出专业、准确的回答。'''

        # RAG 配置 - 激活并配置 Elasticsearch 后端
        rag_cfg = {
            "rag_backend": "elasticsearch",
            "es": {
                "host": "https://localhost",
                "port": 9200,
                "user": "elastic",
                "password": "your_password"
                "index_name": "my_insurance_docs_index"
            },
            "parser_page_size": 500
        }
        
        bot = Assistant(
            llm=llm_cfg,
            system_message=system_instruction,
            files=files,
            rag_cfg=rag_cfg
        )
        return bot

    else:  # full mode
        # 完整模式：具备 Elasticsearch RAG 和网络搜索能力
        system_instruction = '''你是一个AI助手。
请根据用户的问题，优先利用检索工具从本地知识库中查找最相关的信息。
如果本地知识库没有相关信息，再使用 tavily_search 工具从互联网上搜索，并结合这些信息给出专业、准确的回答。'''

        # RAG 配置
        rag_cfg = {
            "rag_backend": "elasticsearch",
            "es": {
                "host": "https://localhost",
                "port": 9200,
                "user": "elastic",
                "password": "your_password",
                "index_name": "my_insurance_docs_index"
            },
            "parser_page_size": 500
        }

        # MCP 工具配置 - 新增 tavily-mcp
        tools_cfg: List[Union[str, Dict, BaseTool]] = [{
            "mcpServers": {
                "tavily-mcp": {
                    "command": "npx",
                    "args": ["-y", "tavily-mcp@0.1.4"],
                    "env": {
                        "TAVILY_API_KEY": os.getenv('TAVILY_API_KEY', "YOUR_TAVILY_API_KEY")
                    },
                    "disabled": False,
                    "autoApprove": []
                }
            }
        }]
        
        bot = Assistant(
            llm=llm_cfg,
            system_message=system_instruction,
            function_list=tools_cfg,
            files=files,
            rag_cfg=rag_cfg
        )
        return bot


# 全局变量
bots = {
    "simple": init_agent_service("simple"),
    "elasticsearch": init_agent_service("elasticsearch"),
    "rag": init_agent_service("rag"),
    "full": init_agent_service("full")
}
session_histories = {}

def get_session_id():
    return str(time.time())

def stream_predict(query: str, history: list, session_id: str, mode: str = "full") -> Generator:
    """Gradio 的核心预测函数 - 支持流式响应"""
    if session_id not in session_histories:
        session_histories[session_id] = []
    
    messages = session_histories[session_id]
    messages.append({'role': 'user', 'content': query})
    
    history[-1][1] = ""
    full_response = ""

    bot = bots.get(mode, bots["full"])
    for response in bot.run(messages=messages):
        if response and response[-1]['role'] == 'assistant':
            new_text = response[-1]['content']
            if new_text != full_response:
                delta = new_text[len(full_response):]
                history[-1][1] += delta
                full_response = new_text
                yield history

    messages.append({'role': 'assistant', 'content': full_response})
    session_histories[session_id] = messages

def predict(query, history, session_id, mode: str = "full"):
    """Gradio 的核心预测函数 - 非流式响应"""
    if session_id not in session_histories:
        session_histories[session_id] = []
    
    messages = session_histories[session_id]
    messages.append({'role': 'user', 'content': query})
    
    response_text = ""
    bot = bots.get(mode, bots["full"])
    for response in bot.run(messages=messages):
        if response and response[-1]['role'] == 'assistant':
            response_text = response[-1]['content']
            
    messages.append({'role': 'assistant', 'content': response_text})
    session_histories[session_id] = messages
    
    history[-1][1] = response_text
    return history

def app_tui(mode: str = "full"):
    """终端交互模式
    
    提供命令行交互界面，支持：
    - 连续对话
    - 文件输入
    - 实时响应
    """
    try:
        # 初始化助手
        bot = bots.get(mode, bots["full"])

        # 对话历史
        messages = []
        while True:
            try:
                # 获取用户输入
                query = input('user question: ')
                
                # 输入验证
                if not query:
                    print('user question cannot be empty！')
                    continue
                    
                # 构建消息
                messages.append({'role': 'user', 'content': query})

                print("正在处理您的请求...")
                # 运行助手并处理响应
                response = []
                current_index = 0
                first_chunk = True
                for response_chunk in bot.run(messages=messages):
                    if first_chunk:
                        # 尝试获取并打印召回的文档内容
                        # 检查bot是否有retriever属性
                        print("\n===== 召回的文档内容 =====")
                        try:
                            # 尝试使用bot的检索功能
                            # 这里我们只是打印信息，因为具体的实现依赖于bot的内部结构
                            print("使用内置检索功能查找相关信息...")
                        except Exception as e:
                            print(f"检索文档时出错: {e}")
                        print("===========================\n")
                        first_chunk = False

                    # The response is a list of messages. We are interested in the assistant's message.
                    if response_chunk and response_chunk[0]['role'] == 'assistant':
                        assistant_message = response_chunk[0]
                        new_content = assistant_message.get('content', '')
                        if new_content:
                            print(new_content[current_index:], end='', flush=True)
                            current_index = len(new_content)
                        else:
                            current_index = 0
                    
                    response = response_chunk
                
                print() # New line after streaming.

                messages.extend(response)
            except Exception as e:
                print(f"处理请求时出错: {str(e)}")
                print("请重试或输入新的问题")
    except Exception as e:
        print(f"启动终端模式失败: {str(e)}")


def app_gui(mode: str = "full"):
    """图形界面模式，提供 Web 图形界面"""
    try:
        print("正在启动 Web 界面...")
        # 初始化助手
        bot = bots.get(mode, bots["full"])
        
        # 配置聊天界面，列举典型问题
        chatbot_config = {
            'prompt.suggestions': [
                '画一只在写代码的猫',
                '介绍下雇主责任险',
                '帮我画一个宇宙飞船，然后把它变成黑白的',
                '雇主责任险和工伤保险有什么主要区别？',
                '介绍一下平安商业综合责任保险（亚马逊）的保障范围。',
                '施工保主要适用于哪些场景？',
                '最近有什么新的保险产品推荐吗？'
            ]
        }
        print("Web 界面准备就绪，正在启动服务...")
        # 启动 Web 界面
        WebUI(
            bot,
            chatbot_config=chatbot_config
        ).run()
    except Exception as e:
        print(f"启动 Web 界面失败: {str(e)}")
        print("请检查网络连接和 API Key 配置")


def get_image_base64(image_path):
    """将图片文件转换为 Base64 编码的字符串"""
    try:
        with open(image_path, "rb") as img_file:
            return base64.b64encode(img_file.read()).decode('utf-8')
    except Exception as e:
        print(f"Error reading image file: {e}")
        return ""
        
def load_css(css_path):
    """读取 CSS 文件内容"""
    try:
        with open(css_path, "r", encoding="utf-8") as f:
            return f.read()
    except Exception as e:
        print(f"Error reading css file: {e}")
        return ""

def main_gradio():
    """启动自定义的 Gradio Web 图形界面"""

    current_dir = os.path.dirname(os.path.abspath(__file__))
    static_dir_path = os.path.join(current_dir, "static")
    
    # --- Base64 嵌入图片 ---
    logo_path = os.path.join(static_dir_path, "logo.png")
    logo_base64 = get_image_base64(logo_path)
    logo_data_uri = f"data:image/png;base64,{logo_base64}"

    # --- 读取并内联 CSS ---
    css_content = load_css(os.path.join(static_dir_path, "styles.css"))
    # 为 Logo 添加大小限制
    css_content += "\n#logo-img { width: 40px !important; height: 40px !important; }"

    
    with gr.Blocks(css=css_content, theme=gr.themes.Soft(primary_hue="blue", secondary_hue="purple")) as demo:
        session_id = gr.State(get_session_id)
        mode = gr.State("full")  # 默认模式为full
        
        with gr.Row():
            with gr.Column(scale=2, elem_id="sidebar"):
                with gr.Row(elem_id="logo"):
                    # 使用 Base64 Data URI 直接嵌入 Logo
                    gr.HTML(f'<img id="logo-img" src="{logo_data_uri}" alt="logo">')
                    gr.HTML('<h1 id="logo-text">知乎直答</h1>')
                
                gr.Button("🔍  搜索", elem_classes=["sidebar-btn", "active"])
                knowledge_btn = gr.Button("📚  知识库", elem_classes="sidebar-btn")
                favorites_btn = gr.Button("⭐  收藏", elem_classes="sidebar-btn")
                history_btn = gr.Button("🕒  历史", elem_classes="sidebar-btn")
            
            with gr.Column(scale=8, elem_id="main-chat"):
                with gr.Row(elem_id="chat-header"):
                    gr.HTML('<h1 id="chat-header-title">用提问发现世界</h1><p id="chat-header-subtitle">输入你的问题，或使用「@快捷引用」对知乎答主、知识库进行提问</p>')

                chatbot = gr.Chatbot(elem_id="chatbot", bubble_full_width=False, height=550)
                
                with gr.Row(elem_id="suggestion-row") as suggestion_row:
                    suggestions = ['介绍下雇主责任险', '雇主责任险和工伤保险有什么主要区别？', '最近有什么新的保险产品推荐吗？']
                    suggestion_btns = []
                    for s in suggestions:
                        btn = gr.Button(s, elem_classes="suggestion-btn")
                        suggestion_btns.append(btn)
                
                with gr.Row(elem_id="input-container-wrapper"):
                    with gr.Row(elem_id="input-container"):
                        textbox = gr.Textbox(container=False, show_label=False, placeholder="输入你的问题...", scale=10)
                        submit_btn = gr.Button("↑", scale=1, min_width=0, variant="primary")
        
        def on_submit(query, history):
            history.append([query, None])
            return "", history

        def on_suggestion_click(suggestion, history):
            history.append([suggestion, None])
            return "", history, gr.update(visible=False)
        
        def show_not_implemented_toast():
            gr.Info("功能暂未实现，敬请期待！")

        knowledge_btn.click(show_not_implemented_toast, None, None)
        favorites_btn.click(show_not_implemented_toast, None, None)
        history_btn.click(show_not_implemented_toast, None, None)

        submit_event = textbox.submit(on_submit, [textbox, chatbot], [textbox, chatbot], queue=False)
        submit_event.then(lambda: gr.update(visible=False), None, suggestion_row)
        submit_event.then(stream_predict, [textbox, chatbot, session_id, mode], chatbot)

        click_event = submit_btn.click(on_submit, [textbox, chatbot], [textbox, chatbot], queue=False)
        click_event.then(lambda: gr.update(visible=False), None, suggestion_row)
        click_event.then(stream_predict, [textbox, chatbot, session_id, mode], chatbot)
        
        for btn in suggestion_btns:
            s_click_event = btn.click(on_suggestion_click, [btn, chatbot], [textbox, chatbot, suggestion_row], queue=False)
            s_click_event.then(stream_predict, [btn, chatbot, session_id, mode], chatbot)

    print("正在启动 AI 助手 Web 界面 (整合版)...")
    demo.launch()

def main():
    """主函数 - 启动程序"""
    print("AI 助手启动中...")
    print("请选择运行模式:")
    print("1. 终端交互模式 (简单功能)")
    print("2. 终端交互模式 (Elasticsearch)")
    print("3. 终端交互模式 (RAG)")
    print("4. 终端交互模式 (完整功能)")
    print("5. Web 界面模式 (简单功能)")
    print("6. Web 界面模式 (Elasticsearch)")
    print("7. Web 界面模式 (RAG)")
    print("8. Web 界面模式 (完整功能)")
    print("9. 自定义 Gradio 界面 (完整功能)")
    
    choice = input("请输入选项 (1-9): ")
    
    modes = {
        "1": ("simple", "tui"),
        "2": ("elasticsearch", "tui"),
        "3": ("rag", "tui"),
        "4": ("full", "tui"),
        "5": ("simple", "gui"),
        "6": ("elasticsearch", "gui"),
        "7": ("rag", "gui"),
        "8": ("full", "gui"),
        "9": (None, "gradio")
    }
    
    if choice in modes:
        mode, interface = modes[choice]
        if interface == "tui":
            app_tui(mode)
        elif interface == "gui":
            app_gui(mode)
        elif interface == "gradio":
            main_gradio()
    else:
        print("无效选项，启动默认 Web 界面模式 (完整功能)")
        app_gui("full")

if __name__ == '__main__':
    main()
