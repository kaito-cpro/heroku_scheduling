#!/usr/bin/python
# -*- coding: utf-8 -*-
import cgi
import random
import requests
from bs4 import BeautifulSoup

form = cgi.FieldStorage()

url = form.getfirst('url')

html = requests.get(url)

soup = BeautifulSoup(html.text, "lxml")

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

html_body = """
<html><body><br><br><br>
日時の1つ目は {}<br><br>
</body></html>""" % (dates[0])

print("Content-type: text/html\n")
print(html_body)