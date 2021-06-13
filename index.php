<html>
<html lang="ja">
    <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-198118895-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-198118895-1');
        </script>
        <title>調整さん 拡張機能</title>
        <meta charset="utf-8" name="viewport"
              content="width=320,
                       height=480,
                       initial-scale=1.0,
                       minimum-scale=1.0,
                       maximum-scale=2.0,
                       user-scalable=yes" />
        <meta name="keywords" content="調整さん,拡張機能" />
        <link rel="stylesheet" href="style.css?202106140238" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.8/brython.js" integrity="sha256-rA89wPrTJJQFWJaZveKW8jpdmC3t5F9rRkPyBjz8G04=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/gasparesganga-jquery-loading-overlay@2.1.7/dist/loadingoverlay.min.js"></script>
        <script type="text/javascript" src="history.js"></script>
        <script type="text/javascript" src="uncheck.js"></script>
        <script type="text/javascript" src="loading.js"></script>
    </head>
    <body onload="brython(); set_url()">
        <h1>調整さん 拡張機能</h1>
        
        <p> 日程調整ツール「<a href="https://chouseisan.com/">調整さん</a>」を見やすく表示するためのツールです。
            下の枠内に「調整さん」のイベント URL を入力して次へ進んでください。
            空欄のまま読み込むとサンプルのイベントが表示されます。</p>
        <br>

        <form action="table.php" method="post">
            <div class="inputs">
                <label class="label">URL</label>
                <input class="input_form" id="url" type="text" name='url'>
            </div>
            
            <div class="btn-area">
                <input type="submit" value="読み込む">
            </div>
        </form>
        
        <br>
        <br>
        <br>
        <h3><span>本ツールについて</span></h3>
        <p>「読み込む」ボタンを押すことによって「調整さん」の最新のデータが読み込まれます。必ず読み込みボタンを押して最新のデータに更新してからご利用ください。</p>
        <p>本ツールは <a href="https://jp.heroku.com/what">Heroku</a> の無料プラットフォームで動作しており、毎月 550 時間まで利用可能です。(ほぼ大丈夫ですが)これをを超えた場合は本ツールを一時的に利用できなくなる場合があります。</noframes></p>
        
        <p style="text-align: right">Developer: Kai 2020.12.25 </p>
        
        <input type="checkbox" id="navTgl">
        <label for="navTgl" class="open"><span></span></label>
        <label for="navTgl" class="close"></label>
        <nav class="menu">
            <h2>menu</h2>
            <ul>
                <li><a href="index.php">トップページ</a></li>
                <li><a href="how_to_use.php">使い方</a></li>
                <li><a href="about_developer.php">開発者について</a></li>
                <li><a href="inquiry.php">お問い合わせ</a></li>
            </ul>
        </nav>
        
        <script type="text/javascript">
            /*
            var ver = 1;
            var cookies = document.cookie.split("; ");
            for (let i = 0; i < cookies.length; ++i) {
                if (cookies[i].indexOf("popup_ver") === 0) {
                    var ver_log = Number(cookies[i].substr(cookies[i].indexOf("=") + 1));
                    if (ver_log !== ver) {
                        var popup_trigger = document.getElementById('trigger_maintenance');
                        popup_trigger.style.display = 'none';  // <- どの要素のどのプロパティをいじればよい??
                        // また、外部関数化したい
                    }
                }
            }
            document.cookie = "popup_ver=" + ver;
            */
        </script>
        
        <!-- <div class="popup_wrap">
            <input id="trigger_maintenance" type="checkbox" checked="checked">
            <div class="popup_overlay">
                <label for="trigger_maintenance" class="popup_trigger"></label>
                <div class="popup_content">
                    <div class="text_title">メンテナンスに伴う仕様変更のお知らせ</div>
                    <p>この度のメンテナンスにより変更・追加された機能がありますのでお知らせします。</p>
                    <p>変更点１: 前回入力した調整さんのイベント URL が自動で入力されるようになりました。</p>
                    <p>変更点２: サイドメニューが追加されました。お問い合わせフォームからは気軽にメッセージを送っていただけると喜びます。</p>
                    <p>変更点３: サイドメニューから出欠表で特定の人をハイライトすることが可能になりました。複数人のハイライトも可能です。</p>
                    <div class="space"></div>
                    <label for="trigger_maintenance" class="close_btn"><img src="img/close_btn.png" width=30px></label>
                </div>
            </div>
        </div> -->
    </body>
</html>
