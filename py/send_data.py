import sys
import requests
import os

line_notify_token = os.environ["LINE_TOKEN"]  # LINE Notify のアクセストークン
# LINE Notify のアクセストークンの環境変数の設定の仕方
# $ heroku config:set LINE_TOKEN=******* --app heroku-scheduling

line_notify_api = 'https://notify-api.line.me/api/notify'  # LINE Notify の API アドレス

message = '\n' + '- - - - -  data  - - - - -\n'

with open('data.txt') as f:
    message += f.read()

payload = {'message': message}
headers = {'Authorization': 'Bearer ' + line_notify_token} 
line_notify = requests.post(line_notify_api, data=payload, headers=headers)

print("<p>アンケートへのご協力ありがとうございました。</p>")
print('''<p>ご要望や不具合などがありましたら、<a href="inquiry.php">お問い合わせフォーム</a>の方からご連絡をお願いします。</p>''')
print('''<div class="space"></div>''')
print('''<input type="button" onclick="history.back()" value="戻る">''')