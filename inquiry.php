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
        <link rel="stylesheet" href="style.css?202107261755" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.8/brython.js" integrity="sha256-rA89wPrTJJQFWJaZveKW8jpdmC3t5F9rRkPyBjz8G04=" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
        <script type="text/javascript" src="js/scroll.js?202107191541"></script>
        <script type="text/javascript" src="js/gather_data.js?202106282227"></script>
        <script type="text/javascript" src="js/loading.js?202106161416"></script>
        <script type="text/javascript" src="js/menu.js?202107201500"></script>
        <script type="text/javascript" src="js/history.js"></script>
        <script type="text/javascript" src="js/notification.js?202107181731"></script>
        <script type="text/javascript" src="js/popup.js?202107201500"></script>
    </head>
    <body onload="brython()"> 
        <h1>調整さん 拡張機能</h1>
        
        <form>
            <div class="inputs">
                <label class="label">開発者へのメッセージ</label>
                <br>
                <textarea cols="33" rows="14" id="message" name="message" value=""></textarea>
            </div>
            
            <div class="btn-area">
                <input type="button" value="送信" onclick="load_for_message('send_message.php', 'message', get_device_data())">
            </div>
        </form>
                
        <script type="text/javascript">
            expand_menu();
            expand_cookie_access_console();
            expand_notification_list();
            expand_popup();
        </script>
        
        <br>
        <br>
        <input type="button" onclick="history.back()" value="戻る">
        
        <div id="loading" style="display:none;">
            <div class="loadingMsg"></div>
        </div>
    </body>
</html>