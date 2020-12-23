import sys
import requests
from bs4 import BeautifulSoup
'''
url = sys.argv[1]

html = requests.get(url)

soup = BeautifulSoup(html.content, "html.parser")

dates = []  # 日時
info = []  # 名前と出欠

for e in soup.find_all('td', style="text-align:left;border-bottom:1px solid #ddd"):
    dates.append(e.text)
    
for e in soup.find_all('td', style="border-bottom:1px solid #ddd"):
    info.append(e.text)

dates.remove('日程')
dates.remove('コメント')

members_num = len(info) // (1 + len(dates))  # 人数

names = [info[i].strip() for i in range(members_num)]  # 名前
attends = [info[i + members_num] for i in range(len(info) - members_num)]  # 出欠

# print(dates)
# print(names)
# print(attends)

table = [[None for _ in range(len(names))] for _ in range(len(dates))]
for i in range(len(table)):
    for j in range(len(table[i])):
        if attends[i * members_num + j] == '○':
            table[i][j] = 1
        elif attends[i * members_num + j] == '△':
            table[i][j] = 0
        elif attends[i * members_num + j] == '×':
            table[i][j] = -1

# print(table)
'''

dates = ['12/23 19:00', '12/24 19:00', '12/25 19:00']
table = [[1, 0, -1], [0, 0, 1], [1, -1, -1]]
names = ['Pareo', 'CHU2', 'LOCK']


symbol = {1: '○', 0: '△', -1: '×'}

html_body = f'''
    <table>
        <colgroup span="1" style="background:#ffe6e6;border:solid 2px #ef534f">
        <colgroup span="3" style="background:#fdf5e0;border:solid 2px #fcd471">

        <tr>
            <th>日時</th>
            <th>{symbol[1]}</th>
            <th>{symbol[0]}</th>
            <th>{symbol[-1]}</th>
        </tr>
    '''
    
for i in range(len(table)):
    html_body += f'''
        <tr>
            <td>{dates[i]}</td>'''
    for j in [1, 0, -1]:
        html_body += f'''
                <td>
                    <label for="trigger" class="open_btn">{table[i].count(j)}人</label>
                    <div class="popup_wrap">
                    <input id="trigger" type="checkbox">
                    <div class="popup_overlay">
                    <label for="trigger" class="popup_trigger"></label>
                    <div class="popup_content">
                    <label for="trigger" class="close_btn">×</label>
                    <h2>{dates[i]} {symbol[j]}</h2>'''
        '''            
        names_disp = []
        for k in range(len(table[i])):
            if table[i][k] == j:
                names_disp.append(names[k])
        for name in names_disp:
            html_body += '<p>' + name + '</p>'
        '''    
        html_body += '''
                    </div>
                    </div>
                    </div>
                </td>
            </tr>'''

html_body += '</table>'

print(html_body)