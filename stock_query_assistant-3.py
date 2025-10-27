import os
import asyncio
from typing import Optional
import dashscope
from qwen_agent.agents import Assistant
from qwen_agent.gui import WebUI
import pandas as pd
from sqlalchemy import create_engine
from qwen_agent.tools.base import BaseTool, register_tool
import matplotlib.pyplot as plt
import io
import base64
import time
import numpy as np
from datetime import datetime, timedelta
from statsmodels.tsa.arima.model import ARIMA
import warnings
warnings.filterwarnings('ignore')

# 解决中文显示问题
plt.rcParams['font.sans-serif'] = ['SimHei', 'Microsoft YaHei', 'SimSun', 'Arial Unicode MS']  # 优先使用的中文字体
plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题

ROOT_RESOURCE = os.path.join(os.path.dirname(__file__), 'resource')
dashscope.api_key = os.getenv('DASHSCOPE_API_KEY', '')
dashscope.timeout = 30

system_prompt = """我是股票查询助手，以下是关于股票历史价格表相关的字段，我可能会编写对应的SQL，对数据进行查询
-- 股票历史价格表
CREATE TABLE stock_price (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT '自增主键',
    stock_name VARCHAR(20) NOT NULL COMMENT '股票名称',
    ts_code VARCHAR(20) NOT NULL COMMENT '股票代码',
    trade_date VARCHAR(10) NOT NULL COMMENT '交易日期',
    open DECIMAL(15,2) COMMENT '开盘价',
    high DECIMAL(15,2) COMMENT '最高价',
    low DECIMAL(15,2) COMMENT '最低价',
    close DECIMAL(15,2) COMMENT '收盘价',
    vol DECIMAL(20,2) COMMENT '成交量',
    amount DECIMAL(20,2) COMMENT '成交额',
    UNIQUE KEY uniq_stock_date (ts_code, trade_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='股票历史价格数据表';

我将回答用户关于股票历史价格、涨跌幅、成交量、收盘价等相关问题。

每当 exc_sql 工具返回 markdown 表格和图片时，你必须原样输出工具返回的全部内容（包括图片 markdown），不要只总结表格，也不要省略图片。这样用户才能直接看到表格和图片。

当我查询到数据的时候，可以对这个数据进行简单的总结。
"""

@register_tool('exc_sql')
class ExcSQLTool(BaseTool):
    """
    SQL查询工具，执行传入的SQL语句并返回结果，并自动进行可视化。
    """
    description = '对于生成的SQL，进行SQL查询，并自动可视化'
    parameters = [{
        'name': 'sql_input',
        'type': 'string',
        'description': '生成的SQL语句',
        'required': True
    }]

    def call(self, params: str, **kwargs) -> str:
        import json
        import matplotlib.pyplot as plt
        import io, os, time
        import numpy as np
        args = json.loads(params)
        sql_input = args['sql_input']
        database = args.get('database', 'stock')
        visualize = args.get('visualize', True)  # 默认需要可视化
        engine = create_engine(
            f'mysql+mysqlconnector://student123:student321@rm-uf6z891lon6dxuqblqo.mysql.rds.aliyuncs.com:3306/{database}?charset=utf8mb4',
            connect_args={'connect_timeout': 10}, pool_size=10, max_overflow=20
        )
        try:
            df = pd.read_sql(sql_input, engine)
            # 显示前5行+后5行
            if len(df) <= 10:
                md = df.to_markdown(index=False)
            else:
                first_5 = df.head(5).to_markdown(index=False)
                last_5 = df.tail(5).to_markdown(index=False)
                md = f"{first_5}\n\n... (中间省略 {len(df)-10} 行数据) ...\n\n{last_5}"
            
            # 当结果只有一行时，不输出统计信息和图表
            if len(df) == 1:
                return f"{md}"
            elif not visualize:
                # 不需要可视化时，只返回表格数据
                return f"{md}"
            else:
                desc_md = df.describe().to_markdown()
                # 自动创建目录
                save_dir = os.path.join(os.path.dirname(__file__), 'image_show')
                os.makedirs(save_dir, exist_ok=True)
                filename = f'chart_{int(time.time()*1000)}.png'
                save_path = os.path.join(save_dir, filename)
                # 根据数据量选择可视化方式
                if len(df) > 30:
                    generate_line_chart_png(df, save_path)
                else:
                    generate_bar_chart_png(df, save_path)
                img_path = os.path.join('image_show', filename)
                img_md = f'![图表]({img_path})'
                return f"{md}\n\n{img_md}\n\n数据描述:\n{desc_md}"
        except Exception as e:
            return f"SQL执行或可视化出错: {str(e)}"

@register_tool('arima_stock')
class ArimaStockTool(BaseTool):
    """
    ARIMA股票价格预测工具，使用ARIMA(5,1,5)模型对未来N天进行预测
    """
    description = '使用ARIMA模型预测股票未来价格'
    parameters = [{
        'name': 'ts_code',
        'type': 'string',
        'description': '股票代码（必填）',
        'required': True
    }, {
        'name': 'n',
        'type': 'integer',
        'description': '预测天数（可选，默认5天）',
        'required': False
    }]

    def call(self, params: str, **kwargs) -> str:
        import json
        import matplotlib.pyplot as plt
        import io, os, time
        import numpy as np
        from datetime import datetime, timedelta
        
        args = json.loads(params)
        ts_code = args['ts_code']
        n = args.get('n', 5)  # 默认预测5天
        
        # 连接数据库
        engine = create_engine(
            'mysql+mysqlconnector://student123:student321@rm-uf6z891lon6dxuqblqo.mysql.rds.aliyuncs.com:3306/stock?charset=utf8mb4',
            connect_args={'connect_timeout': 10}, pool_size=10, max_overflow=20
        )
        
        try:
            # 获取前一年的历史数据
            end_date = datetime.now().strftime('%Y-%m-%d')
            start_date = (datetime.now() - timedelta(days=365)).strftime('%Y-%m-%d')
            
            sql = f"""
            SELECT trade_date, close 
            FROM stock_price 
            WHERE ts_code = '{ts_code}' 
            AND trade_date BETWEEN '{start_date}' AND '{end_date}'
            ORDER BY trade_date
            """
            
            df = pd.read_sql(sql, engine)
            
            if len(df) < 30:
                return f"数据不足，至少需要30个交易日的数据进行ARIMA建模。当前只有{len(df)}条数据。"
            
            # 准备时间序列数据
            df['trade_date'] = pd.to_datetime(df['trade_date'])
            df = df.set_index('trade_date')
            df = df.sort_index()
            
            # 使用收盘价进行ARIMA建模
            close_prices = df['close'].values
            
            # ARIMA(5,1,5)建模
            model = ARIMA(close_prices, order=(5, 1, 5))
            model_fit = model.fit()
            
            # 预测未来n天
            forecast = model_fit.forecast(steps=n)
            
            # 生成预测日期
            last_date = df.index[-1]
            forecast_dates = []
            current_date = last_date
            for i in range(n):
                current_date = current_date + timedelta(days=1)
                # 跳过周末
                while current_date.weekday() >= 5:  # 5=Saturday, 6=Sunday
                    current_date = current_date + timedelta(days=1)
                forecast_dates.append(current_date)
            
            # 创建预测结果DataFrame
            forecast_df = pd.DataFrame({
                '预测日期': [d.strftime('%Y-%m-%d') for d in forecast_dates],
                '预测收盘价': [round(price, 2) for price in forecast]
            })
            
            # 生成可视化图表
            save_dir = os.path.join(os.path.dirname(__file__), 'image_show')
            os.makedirs(save_dir, exist_ok=True)
            filename = f'arima_forecast_{int(time.time()*1000)}.png'
            save_path = os.path.join(save_dir, filename)
            
            # 绘制历史数据和预测
            plt.figure(figsize=(12, 6))
            
            # 历史数据
            plt.plot(df.index, df['close'], label='历史收盘价', color='blue')
            
            # 预测数据
            plt.plot(forecast_dates, forecast, label='预测收盘价', color='red', linestyle='--', marker='o')
            
            plt.title(f'{ts_code} 股票价格预测 (ARIMA 5,1,5)')
            plt.xlabel('日期')
            plt.ylabel('收盘价')
            plt.legend()
            plt.grid(True, alpha=0.3)
            plt.xticks(rotation=45)
            plt.tight_layout()
            plt.savefig(save_path)
            plt.close()
            
            # 返回结果
            md = forecast_df.to_markdown(index=False)
            img_path = os.path.join('image_show', filename)
            img_md = f'![ARIMA预测图]({img_path})'
            
            # 模型评估信息
            aic = model_fit.aic
            bic = model_fit.bic
            
            model_info = f"""
**ARIMA模型信息:**
- 模型参数: ARIMA(5,1,5)
- AIC: {aic:.2f}
- BIC: {bic:.2f}
- 训练数据: {len(df)} 个交易日
- 预测天数: {n} 天

**预测结果:**
"""
            
            return f"{model_info}\n{md}\n\n{img_md}"
            
        except Exception as e:
            return f"ARIMA预测出错: {str(e)}"

# ========== 柱状图可视化函数 ========== 
def generate_bar_chart_png(df_sql, save_path):
    columns = df_sql.columns
    x = np.arange(len(df_sql))
    object_columns = df_sql.select_dtypes(include='O').columns.tolist()
    if columns[0] in object_columns:
        object_columns.remove(columns[0])
    num_columns = df_sql.select_dtypes(exclude='O').columns.tolist()
    if len(object_columns) > 0:
        pivot_df = df_sql.pivot_table(index=columns[0], columns=object_columns, 
                                      values=num_columns, 
                                      fill_value=0)
        fig, ax = plt.subplots(figsize=(10, 6))
        bottoms = None
        for col in pivot_df.columns:
            ax.bar(pivot_df.index, pivot_df[col], bottom=bottoms, label=str(col))
            if bottoms is None:
                bottoms = pivot_df[col].copy()
            else:
                bottoms += pivot_df[col]
    else:
        bottom = np.zeros(len(df_sql))
        for column in columns[1:]:
            plt.bar(x, df_sql[column], bottom=bottom, label=column)
            bottom += df_sql[column]
        plt.xticks(x, df_sql[columns[0]])
    plt.legend()
    plt.title("股票历史价格统计（柱状图）")
    plt.xlabel(columns[0])
    plt.ylabel("数值")
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.savefig(save_path)
    plt.close()

# ========== 折线图可视化函数 ========== 
def generate_line_chart_png(df_sql, save_path):
    columns = df_sql.columns
    # 横坐标筛选，等间隔选取10个点
    if len(df_sql) > 10:
        idx = np.linspace(0, len(df_sql)-1, 10, dtype=int)
        df_plot = df_sql.iloc[idx]
    else:
        df_plot = df_sql
    x = np.arange(len(df_plot))
    object_columns = df_plot.select_dtypes(include='O').columns.tolist()
    if columns[0] in object_columns:
        object_columns.remove(columns[0])
    num_columns = df_plot.select_dtypes(exclude='O').columns.tolist()
    fig, ax = plt.subplots(figsize=(10, 6))
    for column in num_columns:
        ax.plot(x, df_plot[column], marker='o', label=column)
    ax.set_xticks(x)
    ax.set_xticklabels(df_plot[columns[0]], rotation=45)
    plt.legend()
    plt.title("股票历史价格统计（折线图）")
    plt.xlabel(columns[0])
    plt.ylabel("数值")
    plt.tight_layout()
    plt.savefig(save_path)
    plt.close()

def init_agent_service():
    llm_cfg = {
        'model': 'qwen-turbo-latest',
        'timeout': 30,
        'retry_count': 3,
    }
    # MCP 工具配置
    tools = [{
        "mcpServers": {
            "tavily-mcp": {
                "command": "npx",
                "args": ["-y", "tavily-mcp@0.1.4"],
                "env": {
                    "TAVILY_API_KEY": "your_api_key"
                },
                "disabled": False,
                "autoApprove": []
            }
        }
    }, 'exc_sql', 'arima_stock']
    try:
        bot = Assistant(
            llm=llm_cfg,
            name='股票查询助手',
            description='股票历史价格查询与分析',
            system_message=system_prompt,
            function_list=tools,
            files=['./faq.txt']
        )
        print("助手初始化成功！")
        return bot
    except Exception as e:
        print(f"助手初始化失败: {str(e)}")
        raise

def app_tui():
    try:
        bot = init_agent_service()
        messages = []
        while True:
            try:
                query = input('user question: ')
                file = input('file url (press enter if no file): ').strip()
                if not query:
                    print('user question cannot be empty！')
                    continue
                if not file:
                    messages.append({'role': 'user', 'content': query})
                else:
                    messages.append({'role': 'user', 'content': [{'text': query}, {'file': file}]})
                print("正在处理您的请求...")
                response = []
                for response in bot.run(messages):
                    print('bot response:', response)
                messages.extend(response)
            except Exception as e:
                print(f"处理请求时出错: {str(e)}")
                print("请重试或输入新的问题")
    except Exception as e:
        print(f"启动终端模式失败: {str(e)}")

def app_gui():
    try:
        print("正在启动 Web 界面...")
        bot = init_agent_service()
        chatbot_config = {
            'prompt.suggestions': [
                '查询2024年全年贵州茅台的收盘价走势',
                '统计2024年4月国泰君安的日均成交量',
                '对比2024年中芯国际和贵州茅台的涨跌幅',
                '贵州茅台 最近新闻',
                '预测贵州茅台未来10天的股价'
            ]
        }
        print("Web 界面准备就绪，正在启动服务...")
        WebUI(
            bot,
            chatbot_config=chatbot_config
        ).run()
    except Exception as e:
        print(f"启动 Web 界面失败: {str(e)}")
        print("请检查网络连接和 API Key 配置")

if __name__ == '__main__':
    app_gui()          # 图形界面模式（默认） 