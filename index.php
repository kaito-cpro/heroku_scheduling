<html>
<html lang="ja">
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
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"
                integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                crossorigin="anonymous"></script>
        <script type="text/javascript" src="jquery.js"></script>
    </head>
    <body onload="brython()">
        <h1>調整さん 拡張機能(仮)</h1>
        
        <p> 日程調整ツール「調整さん」を見やすく表示するためのツールです。</p>
        <p> 下の枠内に「調整さん」の URL を入力して次へ進んでください。</p>
        <br>

        <form action="next.php" method="post">
            <div class="inputs">
                <label class="label">URL</label>
                <input class="input_form" type="text" name="url" value="https://chouseisan.com/s?h=0e273e644d184880ba9d555dfbd19ba8">
            </div>
            
            <div class="btn-area">
                <input type="submit" value="読み込む">
            </div>
        </form>
        
        <div class="loading">
            <div class="animation">Now Loading...</div>
        </div>
        <header></header>        
    </body>
</html>
