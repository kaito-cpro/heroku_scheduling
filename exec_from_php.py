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

html_body = f'''
    <table>
        <colgroup span="1" style="background:#ffe6e6;border:solid 2px #ef534f">
        <colgroup span="2" style="background:#fdf5e0;border:solid 2px #fcd471">

        <tr>
            <th>日時</th>
            <th>○</th>
            <th>△</th>
            <th>×</th>
        </tr>

        <tr>
            <td>{dates[0]}</td>
            <td>{table[0].count(1)}</td>
            <td>{table[0].count(0)}</td>
            <td>{table[0].count(-1)}</td>
        </tr>

        <tr>
            <td>{dates[1]}</td>
            <td>{table[1].count(1)}</td>
            <td>{table[1].count(0)}</td>
            <td>{table[1].count(-1)}</td>
        </tr>

        <tr>
            <td>{dates[2]}</td>
            <td>{table[2].count(1)}</td>
            <td>{table[2].count(0)}</td>
            <td>{table[2].count(-1)}</td>
        </tr>

    </table>'''
print(html_body)