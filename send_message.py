import sys
import requests

exit()

line_notify_token = '**********************'  # LINE Notifyのアクセス(自分が発行したトークンへ変更)
line_notify_api = 'https://notify-api.line.me/api/notify'  # LINE Notify の API アドレス

message = ''.join(sys.argv[1:])
payload = {'message': message}
headers = {'Authorization': 'Bearer ' + line_notify_token} 
line_notify = requests.post(line_notify_api, data=payload, headers=headers)