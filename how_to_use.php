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
        <link rel="stylesheet" href="style.css?202107181600" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.8/brython.js" integrity="sha256-rA89wPrTJJQFWJaZveKW8jpdmC3t5F9rRkPyBjz8G04=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
        <script type="text/javascript" src="js/ignore_resize.js"></script>
        <script type="text/javascript" src="js/loading.js"></script>
        <script type="text/javascript" src="js/menu.js?202107110702"></script>
        <script type="text/javascript" src="js/history.js"></script>
        <script type="text/javascript" src="js/gather_data.js?202106282227"></script>
        <script type="text/javascript" src="js/notification.js"></script>
        <script type="text/javascript" src="js/popup.js"></script>
    </head>
    <body onload="brython()"> 
        <h1>調整さん 拡張機能</h1>
        
        <form action="">
            <div class="inputs">
                <label class="label">調整さん拡張機能の使い方</label>
            </div>
        </form>
        <div class="dot"></div><p>まず、URL欄に「調整さん」のイベントURLを入力します。トップページの「<a href="https://chouseisan.com/">調整さん</a>」のリンクへ行き、イベント履歴からURLをコピペするのがオススメです。2回目以降は前回入力したURLが自動で入力されます。</p>
        <div class="dot"></div><p>次に、読み込みボタンを押すと出欠表が表示されます。人数のマスをタップするとメンバーの一覧が表示されます。</p>
        <div class="dot"></div><p>サイドメニューを開き、メンバーの名前の左にあるチェックボタンを押すと、そのメンバーがハイライトで表示されます。複数人をチェックすることも可能です。</p>
        <div class="dot"></div><p>サイドメニューのお問い合わせフォームからは、開発者(Developer: Kai)へメッセージを送ることができます。バグの報告やご要望などがあれば気軽に送ってください。</p>
        
        <div class="space"></div>
        
        <h3><span>注意点</span></h3>
        <div class="dot"></div><p>本ツールは、トップページの読み込みボタンを押すことによって最新の「調整さん」の出欠表データを取得しています。よって、ブラウザ等で本ツールを開いたまま長時間が経過した場合にはデータが最新ではありませんので、必ずトップページから読み込みボタンを押して最新のデータに更新してご利用ください。</p>
        <div class="dot"></div><p>本ツールは <a href="https://jp.heroku.com/what">heroku</a> の無料プラットフォームで動作しており、毎月550時間までサーバを利用できます。ほぼ大丈夫ですが、この550時間を超えてしまった場合は一時的に本ツールを利用できなくなる場合がありますのでご了承ください。</p>
        <div class="dot"></div><p>本ツールは無料サーバを利用しているため、初回アクセス時にサーバを立ち上げる時間がかかります。よって、初回アクセス時にうまく接続が安定しない場合はリロードするか10秒ほど待つとうまく接続されます。</p>
        
        <script type="text/javascript">
            expand_menu();
            expand_cookie_access_console();
            expand_notification_list();
            expand_popup();
        </script>
        
        <div class="space"></div>
        <input type="button" onclick="history.back()" value="戻る">
        
        <div id="loading" style="display:none;">
            <div class="loadingMsg"></div>
        </div>
    </body>
</html>