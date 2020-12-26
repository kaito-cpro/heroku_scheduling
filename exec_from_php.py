import sys
import requests
from bs4 import BeautifulSoup

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

symbol = {0: '○', 1: '△', 2: '×'}
symbol_disp = {0: 'maru', 1: 'sankaku', 2: 'batsu'}

table = [[None for _ in range(len(names))] for _ in range(len(dates))]
for i in range(len(table)):
    for j in range(len(table[i])):
        for k in range(3):
            if attends[i * members_num + j] == symbol[k]:
                table[i][j] = k

# print(table)

prev_day = '-1'
def decide_color(date):
    day = date.split('/')[1].split('(')[0]
    if day == prev_day:
        prev_day = day
        color = 1
    else:
        prev_day = day
        color = 2
    return color

html_body = f'''
    <table>
        <tr>
            <th>日時</th>
            <th><img src=img/{symbol_disp[0]}.png width=20px></th>
            <th><img src=img/{symbol_disp[1]}.png width=20px></th>
            <th><img src=img/{symbol_disp[2]}.png width=20px></th>
        </tr>
    '''
    
for i in range(len(table)):
    html_body += f'''
        <tr>
            <td>{dates[i]}</td>'''
    for j in range(3):
        html_body += f'''
                <td class="color1">
                    <label for="trigger{3 * i + j}" class="open_btn">{table[i].count(j)}人</label>
                    <div class="popup_wrap">
                    <input id="trigger{3 * i + j}" type="checkbox">
                    <div class="popup_overlay">
                    <label for="trigger{3 * i + j}" class="popup_trigger"></label>
                    <div class="popup_content">
                    <label for="trigger{3 * i + j}" class="close_btn"><img src="img/close_btn.png" width=30px></label>
                    <h2>&nbsp;{dates[i]} </h2>'''
                    
        names_disp = []
        for k in range(len(table[i])):
            if table[i][k] == j:
                names_disp.append(names[k])
        for name in names_disp:
            html_body += '<p>' + name + '</p>'
        html_body += '<p>' + f'({table[i].count(j)}人)' + '</p>'
        
        html_body += '''
                    </div>
                    </div>
                    </div>
                </td>'''
    html_body += '</tr>'

html_body += '</table>'

print(html_body)