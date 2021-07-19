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
        <link rel="stylesheet" href="style.css?202107190935" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.8/brython.js" integrity="sha256-rA89wPrTJJQFWJaZveKW8jpdmC3t5F9rRkPyBjz8G04=" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
        <script type="text/javascript" src="js/ignore_resize.js"></script>
        <script type="text/javascript" src="js/loading.js"></script>
        <script type="text/javascript" src="js/menu.js?202107110732"></script>
        <script type="text/javascript" src="js/history.js"></script>
        <script type="text/javascript" src="js/gather_data.js?202106282227"></script>
        <script type="text/javascript" src="js/notification.js?202107181730"></script>
        <script type="text/javascript" src="js/popup.js"></script>
    </head>
    <body onload="brython()"> 
        <h1>調整さん 拡張機能</h1>
        
        <form action="">
            <div class="inputs">
                <label class="label">開発者について</label>
            </div>
        </form>
        <div class="dot"></div><p>Developerの <span class="under">Kai</span> です。現在大学で数学を専攻しており、プログラミングは独学で学んでいます。競技プログラミングやゲーム開発に興味があります。</p>
        <div class="dot"></div><p>本ツールを制作したきっかけは、所属サークルで「<a href="https://chouseisan.com/">調整さん</a>」を利用する機会があったときにUIをもっと使いやすく改良できそうだなと感じたからです。</p>
        <div class="dot"></div><p>当初は主に自分で使うためだけに作っていた本ツールですが、今では多くの方に利用いただいていて嬉しいです。</p>
        <div class="dot"></div><p>気まぐれで機能を追加したくなったときには突然メンテナンスが入ることがありますが、どうか愛嬌ということでお許しください。</p>
        <div class="dot"></div><p>本ツールについて何かご要望やご感想、バグのご報告などありましたら、<a href="inquiry.php">お問い合わせフォーム</a>を用意していますのでお気軽にメッセージをお送りください。</p>
        <p style="text-align: right">Developer: Kai 2021.06.06 </p>
                
        <script type="text/javascript">
            expand_menu();
            expand_cookie_access_console();
            expand_notification_list();
            expand_popup();
        </script>
        
        <input type="button" onclick="history.back()" value="戻る">
        
        <div id="loading" style="display:none;">
            <div class="loadingMsg"></div>
        </div>
    </body>
</html>