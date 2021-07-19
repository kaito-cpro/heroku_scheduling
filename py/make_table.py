import sys
import re
import requests
from bs4 import BeautifulSoup
from pykakasi import kakasi

url = sys.argv
is_sample = False
if len(url) == 1:
    url = "https://chouseisan.com/s?h=59522eee6900479b8f2ac7b9d33e0f47"  # サンプル URL
    is_sample = True
else:
    url = url[1]

if not re.match(r'https?:\/\/chouseisan\.com\/.+', url):
    html_body = '''
        <p>不正なURLが入力されました。</p>
        <p>「調整さん」のイベントURLを入力してください。</p>
    '''
    print(html_body + "\ninvalid flag")
    sys.exit()

html = requests.get(url)

soup = BeautifulSoup(html.content, "html.parser")

title = soup.find_all('title')[0].text
if title == 'ページが存在しません（404） | 調整さん':
    html_body = '''
        <p>不正なURLが入力されました。</p>
        <p>「調整さん」のイベントURLを入力してください。</p>
    '''
    print(html_body + "\ninvalid flag")
    sys.exit()

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

colors = [-1 for _ in range(len(dates))]
for i in range(len(dates)):
    if i == 0:
        colors[i] = 2
        continue
    day = dates[i].split('/')[1].split('(')[0]
    prev_day = dates[i - 1].split('/')[1].split('(')[0]
    if day == prev_day:
        colors[i] = colors[i - 1]
    else:
        colors[i] = 3 - colors[i - 1]

html_body = ''
if is_sample:
    html_body += '<p style="text-align:center;color:red">※これはサンプルイベントです※</p>'
html_body += f'''
    <p>人数の欄をタップするとメンバーの一覧を見ることができます。</p>

    <table class="highlight-table">
        <tr>
            <th class="color1">日時</th>
            <th class="color3"><img src=img/{symbol_disp[0]}.png width=20px></th>
            <th class="color3"><img src=img/{symbol_disp[1]}.png width=20px></th>
            <th class="color3"><img src=img/{symbol_disp[2]}.png width=20px></th>
        </tr>
    '''
    
for i in range(len(table)):
    html_body += f'''
        <tr>
            <td class="color{colors[i]}">{dates[i]}</td>'''
    for j in range(3):
        html_body += f'''
                <td class="color3">
                    <label for="trigger{3 * i + j}" class="open_btn">{table[i].count(j)}人</label>
                    <div class="popup_wrap">
                        <input id="trigger{3 * i + j}" type="checkbox" class="trigger">
                        <div class="popup_overlay">
                            <label for="trigger{3 * i + j}" class="popup_trigger"></label>
                            <div class="popup_content">
                                <div class="box">
                                        <img src=img/{symbol_disp[j]}2.png width=50px height=50px />
                                        <div class="text">{dates[i]}</div>
                                </div>
                                <label for="trigger{3 * i + j}" class="close_btn"><img src="img/close_btn.png" width=30px></label>'''
                                      
        names_disp = []
        for k in range(len(table[i])):
            if table[i][k] == j:
                names_disp.append(names[k])
        html_body += '<div class="space"></div>'
        for name in names_disp:
            html_body += '''
                <div class="center_box">
                    <span class="person_name">''' + name + '''</span>
                </div>'''
        html_body += f'''
            <div class="center_box">
                <span>({table[i].count(j)}人)</span>
            </div>'''
        
        html_body += '''
                            </div>
                        </div>
                    </div>
                </td>'''
    html_body += '</tr>'

html_body += '</table>'

html_body += '''
    <input type="checkbox" id="navTgl" class="trigger">
    <label for="navTgl" class="open"><span><div class="notification-badge-large" style="display:none"></div></span></label>
    <label for="navTgl" class="close"></label>
    <nav class="menu">
        <h2>menu</h2>
        <ul>
            <li>
                <input type="search" class="light-table-filter" data-table="order-table" placeholder="名前を検索" />
                <table class="order-table">'''
        
kakasi_JH = kakasi()  # 漢字かな変換
kakasi_JH.setMode('J', 'H')
conv_JH = kakasi_JH.getConverter()
kakasi_KH = kakasi()  # カナかな変換
kakasi_KH.setMode('K', 'H')
conv_KH = kakasi_KH.getConverter()
for i in range(len(names)):
    html_body += f'''
                    <tbody>
                        <tr>
                            <th><input type="checkbox" value="{names[i]}({conv_KH.do(conv_JH.do(names[i]))})" onclick="HighlightTableFilter()"><label>{names[i]}</label></th>
                        </tr>
                    </tbody>'''
html_body += '''
                </table>
            </li>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
                <li><a href="index.php">トップページ</a></li>
                <li><a class="notification-badge-small" id="li_notification" onclick="open_notifications()">通知</a></li>
                <li><a href="how_to_use.php">使い方</a></li>
                <li><a href="about_developer.php">開発者について</a></li>
                <li><a href="inquiry.php">お問い合わせ</a></li>
                <!-- 隠しボタン (開発者モード) -->
                <li><a id="cookie_access_li" onclick="open_cookie_access_console()" style="display:none">cookieの変更</a></li>
                <input type="checkbox" id="developer_mode_btn" style="transform:scale(3.0); margin-left:50%; margin-top:15px; opacity:0.001;" onclick="developer_access()">
        </ul>
    </nav>'''
html_body += '<div class="space"></div>'

print(html_body)