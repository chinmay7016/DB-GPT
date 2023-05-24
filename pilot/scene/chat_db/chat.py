import requests
import datetime
import threading
import json
from urllib.parse import urljoin
from sqlalchemy import (
    MetaData,
    Table,
    create_engine,
    inspect,
    select,
    text,
)
from typing import Any, Iterable, List, Optional

from pilot.scene.base_message import BaseMessage, SystemMessage, HumanMessage, AIMessage
from pilot.scene.base_chat import BaseChat, logger, headers
from pilot.scene.base import ChatScene
from pilot.common.sql_database import Database
from pilot.configs.config import Config
from pilot.scene.chat_db.out_parser import SqlAction
from pilot.configs.model_config import LOGDIR, DATASETS_DIR
from pilot.utils import (
    build_logger,
    server_error_msg,
)
from pilot.common.markdown_text import generate_markdown_table,generate_htm_table,datas_to_table_html
from pilot.scene.chat_db.prompt import chat_db_prompt

CFG = Config()


class ChatWithDb(BaseChat):
    chat_scene: str = ChatScene.ChatWithDb.value

    """Number of results to return from the query"""

    def __init__(self, chat_session_id, db_name, user_input):
        """
        """
        super().__init__(ChatScene.ChatWithDb, chat_session_id, user_input)
        if not db_name:
            raise ValueError(f"{ChatScene.ChatWithDb.value} mode should chose db!")
        self.db_name = db_name
        self.database = CFG.local_db
        # 准备DB信息(拿到指定库的链接)
        self.db_connect = self.database.get_session(self.db_name)
        self.top_k: int = 5

    def call(self) -> str:
        input_values = {
            "input": self.current_user_input,
            "top_k": str(self.top_k),
            "dialect": self.database.dialect,
            "table_info": self.database.table_simple_info(self.db_connect),
            # "stop": self.sep_style,
        }

        ### Chat sequence advance
        self.current_message.chat_order = len(self.history_message) + 1
        self.current_message.add_user_message(self.current_user_input)
        self.current_message.start_date = datetime.datetime.now()
        # TODO
        self.current_message.tokens = 0

        current_prompt = self.prompt_template.format(**input_values)

        ### 构建当前对话， 是否安第一次对话prompt构造？ 是否考虑切换库
        if self.history_message:
            ## TODO 带历史对话记录的场景需要确定切换库后怎么处理
            logger.info(f"There are already {len(self.history_message)} rounds of conversations!")

        self.current_message.add_system_message(current_prompt)

        payload = {
            "model": self.llm_model,
            "prompt": self.generate_llm_text(),
            "temperature": float(self.temperature),
            "max_new_tokens": int(self.max_new_tokens),
            "stop": self.sep_style.value,
        }
        logger.info(f"Requert: \n{payload}")

        try:
            ### 走非流式的模型服务接口

            # TODO - TEST
            # response = requests.post(urljoin(CFG.MODEL_SERVER, "generate"), headers=headers, json=payload, timeout=120)
            # clear_response = self.prompt_template.output_parser.parse_model_nostream_resp(response, self.sep_style)
            # sql_action = self.prompt_template.output_parser.parse(clear_response)
            resp_test = {
                "SQL": "select * from users",
                "thoughts": {
                    "text": "thought",
                    "reasoning": "reasoning",
                    "plan": "- short bulleted\n- list that conveys\n- long-term plan",
                    "criticism": "constructive self-criticism",
                    "speak": "thoughts summary to say to user"
                }
            }

            sql_action = SqlAction(**resp_test)

            # self.current_message.add_ai_message(json.dumps(sql_action._asdict()))

            result = self.database.run(self.db_connect, sql_action.SQL)

            self.current_message.add_ai_message(f"{datas_to_table_html(result)}")

        except Exception as e:
            logger.error("model response parase faild！" + str(e))
            self.current_message.add_ai_message(str(e))
        ### 对话记录存储
        self.memory.append(self.current_message)


    def chat_show(self):
        ret = []
        # 单论对话只能有一次User 记录 和一次 AI 记录
        # TODO 推理过程前端展示。。。
        for message in enumerate(self.current_message.messages):
            if (isinstance(message, HumanMessage)):
                ret[-1][-2] = message.content
            if (isinstance(message, AIMessage)):
                ret[-1][-1] = message.content
        return ret

    # 暂时为了兼容前端
    def current_ai_response(self)->str:
        for message in self.current_message.messages:
            if message.type == 'ai':
               return  message.content
        return None


    def generate_llm_text(self) -> str:
        text = ""
        ### 线处理历史信息
        if (len(self.history_message) > self.chat_retention_rounds):
            ### 使用历史信息的第一轮和最后一轮数据合并成历史对话记录
            for first_message in self.history_message[0].messages:
                text += first_message.type + ":" + first_message.content + self.sep

            index = self.chat_retention_rounds - 1
            for last_message in self.history_message[-index:].messages:
                text += last_message.type + ":" + last_message.content + self.sep

        else:
            ### 直接历史记录拼接
            for conversation in self.history_message:
                for message in conversation.messages:
                    text += message.type + ":" + message.content + self.sep

        ### current conversation
        for now_message in self.current_message.messages:
            text += now_message.type + ":" + now_message.content + self.sep

        return text


    @property
    def chat_type(self) -> str:
        return ChatScene.ChatWithDb.value


if __name__ == "__main__":
    # chat: ChatWithDb = ChatWithDb("chat123", "gpt-user", "查询用户信息")
    #
    # chat.call()
    #
    # resp = chat.chat_show()
    #
    # print(vars(resp))

    # memory = FileHistoryMemory("test123")
    # once1 = OnceConversation()
    # once1.add_user_message("问题测试")
    # once1.add_system_message("prompt1")
    # once1.add_system_message("prompt2")
    # once1.chat_order = 1
    # once1.set_start_time(datetime.datetime.now())
    # memory.append(once1)
    #
    # once = OnceConversation()
    # once.add_user_message("问题测试2")
    # once.add_system_message("prompt3")
    # once.add_system_message("prompt4")
    # once.chat_order = 2
    # once.set_start_time(datetime.datetime.now())
    # memory.append(once)

    db: Database = CFG.local_db
    db_connect = db.get_session("gpt-user")
    data = db.run(db_connect, "select * from users")
    print(generate_htm_table(data))


    #
    # print(db.run(db_connect, "select * from users"))
    #
    # #
    # # def print_numbers():
    # #     db_connect1 = db.get_session("dbgpt-test")
    # #     cursor1 = db_connect1.execute(text("select * from test_name"))
    # #     if cursor1.returns_rows:
    # #         result1 = cursor1.fetchall()
    # #     print( result1)
    # #
    # #
    # # # 创建线程
    # # t = threading.Thread(target=print_numbers)
    # # # 启动线程
    # # t.start()
    #
    # print(db.run(db_connect, "select * from tran_order"))
    #
    # print(db.run(db_connect, "select count(*) as aa from tran_order"))
    #
    # print(db.table_simple_info(db_connect))
    # my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    # index = 3
    # last_three_elements = my_list[-index:]
    # print(last_three_elements)
