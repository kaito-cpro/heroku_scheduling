import sys
import requests
import os

line_notify_token = os.environ["LINE_TOKEN"]  # LINE Notify のアクセストークン
# LINE Notify のアクセストークンの環境変数の設定の仕方
# $ heroku config:set LINE_TOKEN=******* --app heroku-scheduling

line_notify_api = 'https://notify-api.line.me/api/notify'  # LINE Notify の API アドレス

if len(sys.argv) == 1:
    print("<p>1 文字以上入力してください。</p>")
    exit()

print(sys.argv[1:])
message = ' '.join(sys.argv[1:])
payload = {'message': message}
headers = {'Authorization': 'Bearer ' + line_notify_token} 
line_notify = requests.post(line_notify_api, data=payload, headers=headers)

print("<p>開発者にメッセージが送信されました。</p>")