<html>
    <head>
        <title>調整さん 拡張機能(仮)</title>
        <meta charset="utf-8" name="viewport"
              content="width=320,
                       height=480,
                       initial-scale=1.0,
                       minimum-scale=1.0,
                       maximum-scale=2.0,
                       user-scalable=yes" />
        <link rel="stylesheet" href="style.css" />
    </head>
    <body onload="brython()">
        <h1>調整さん 拡張機能(仮)</h1>
        
        <p>「調整さん」を見やすく表示するツールです</p>
        <p>下の枠内に「調整さん」の URL を入力して次へ進んでください</p>
        <p> </p>

        <form action="next.php" method="post">
            <div class="inputs">
                <label class="label">URL</label>
                <input class="input_form" type="text" name="url">
            </div>
            <div class="btn-area">
                <input type="submit" value="読み込む">
            </div>
        </form>
    </body>
</html>