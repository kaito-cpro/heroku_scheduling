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
        <script src="https://cdn.jsdelivr.net/npm/gasparesganga-jquery-loading-overlay@2.1.7/dist/loadingoverlay.min.js"></script>
        <script type="text/javascript" src="loading.js"></script>
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
                <input type="submit" value="読み込む" onclick="load();">
            </div>
            
            <div id="loading" style="display:none;">
                <div class="loadingMsg"></div>
            </div>
            
        </form>
        
        <br>
        <br>
        <h3>本ツールについて</h3>
        <p>現在、本ツールは試作段階です。</p>
        <p>「読み込む」ボタンを押すことによって「調整さん」の最新のデータが読み込まれます。必ず読み込みボタンを押して最新のデータに更新してからご利用ください。</p>
        <p>本ツールは Heroku (https://jp.heroku.com/what) の無料プラットフォームで動作しており、毎月 550 時間という利用制限があります。(おそらく大丈夫ですが)利用限度を超えた場合は本ツールを一時的に利用できなくなる場合がありますので、ご容赦ください。</noframes></p>
        
        <td align="right"> Kai 2020.12.25 </td>
    </body>
</html>
