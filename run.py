# src の css および js ファイルの末尾を更新する
# 実行方法:
#   例1:  python run.py loading.js 202107201600
#   例2:  python run.py style.css 202107201600

import sys
import glob
import re

src_file_name = sys.argv[1]
token = sys.argv[2]
 
files = glob.glob("./*.php")
for file in files:
    f = open(file, "r", encoding="utf-8")
    code = f.read()
    f.close()
    
    if src_file_name in code:
        print(file + ": ", end="")
        if src_file_name[-2:] == "js":
            code = re.sub('(<script type="text/javascript" src="js/' + src_file_name + ')[?]*[0-9]*("></script>)', '\\1?' + token + '\\2', code, 1)
            print(" " * (22 - len(file)) + "update completed")
        elif src_file_name[-3:] == "css":
            code = re.sub('(<link rel="stylesheet" href="' + src_file_name + ')[?]*[0-9]*("\s*/>)', '\\1?' + token + '\\2', code, 1)
            print(" " * (22 - len(file)) + "update completed")
            
        f = open(file, "w", encoding="utf-8")
        f.write(code)
        f.close()