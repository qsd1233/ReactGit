import requests
import json
URL = "http://192.168.1.69:9014"
item_data = {
        "ID": "react",
        "PW": "password"
    }
def id_auth():
    url_items = '{url}/login/'.format(url=URL)
    r_post = requests.post(url_items, json=item_data)
    result = r_post.json()
    """
        ID まだ　PWが　正しい場合
        {'RESULT': True}
        正しくない場合
        {'RESULT': False}
    """
    print(result)
def main_list():
    # main list return
    url_items = '{url}/main_list/'.format(url=URL)
    # マインリストはユーザのIDが必ず必要
    next_post = requests.post(url_items, json=item_data)
    report_list = next_post.json()
    """
        {'RESULT': {'main': [{'report 1': 'template 1'}, {'report 2': 'template 2'}, {'report 3': 'template 3'}, {'report 4': 'template 4'}, {'report 5': 'template 5'}, {'report 6': 'template 6'}, {'report 7': 'template 7'}, {'report 8': 'template 8'}, {'report 9': 'template 9'}]}}
    """
    print(report_list)
def contents_detail():
    url_items = '{url}/detail/'.format(url=URL)
    m_json = {"REPORT": "report 1"}
    # マインリストはユーザのIDが必ず必要
    next_post = requests.post(url_items, json=m_json)
    report_list = next_post.json()
    print(report_list)
if __name__ == '__main__':
    # # id 確認
    id_auth()
    # # main list
    main_list()
    # detail
    contents_detail()