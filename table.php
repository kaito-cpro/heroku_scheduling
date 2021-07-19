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
        <link rel="stylesheet" href="style.css?202107191600" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.8/brython.js" integrity="sha256-rA89wPrTJJQFWJaZveKW8jpdmC3t5F9rRkPyBjz8G04=" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
        <script type="text/javascript" src="js/highlight_table.js"></script>
        <script type="text/javascript" src="js/scroll.js?202107191541"></script>
        <script type="text/javascript" src="js/gather_data.js"></script>
        <script type="text/javascript" src="js/history.js?202107150935"></script>
        <script type="text/javascript" src="js/popup.js?202107191231"></script>
        <script type="text/javascript" src="js/loading.js?202106161409"></script>
        <script type="text/javascript" src="js/menu.js?202107191221"></script>
        <script type="text/javascript" src="js/notification.js?202107181730"></script>
    </head>
    <body onload="brython()"> 
        <h1>調整さん 拡張機能</h1>
                    
        <?php
            exec("export LANG=ja_JP.UTF-8");
            $command="python py/make_table.py ".$_POST['val'];
            exec($command,$output,$rtn);
            
            $valid = true;
            foreach ($output as $o) {
                if ($o == "invalid flag") $valid = false;
                else echo $o;
            }
            
            if ($valid) {
                echo <<<EOM
                <script type="text/javascript">
                    if ("{$_POST['val']}" !== "") {
                        document.cookie = "event_url_history=" + "{$_POST['val']}" + "; max-age=5184000";
                    }
                </script>
                EOM;
            }
        ?>
                
        <div id="loading" style="display:none;">
            <div class="loadingMsg"></div>
        </div>
        
        <script type="text/javascript">
            expand_cookie_access_console();
            expand_notification_list();
            expand_popup();
        </script>

        <input type="button" onclick="location.href='index.php';" value="戻る">
        
        <div id="loading" style="display:none;">
            <div class="loadingMsg"></div>
        </div>
    </body>
</html>