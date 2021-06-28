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
        <link rel="stylesheet" href="style.css?202106282145" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.8/brython.js" integrity="sha256-rA89wPrTJJQFWJaZveKW8jpdmC3t5F9rRkPyBjz8G04=" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script type="text/javascript" src="js/highlight_table.js"></script>
        <script type="text/javascript" src="js/ignore_resize.js"></script>
        <script type="text/javascript" src="js/gather_data.js"></script>
        <script type="text/javascript" src="js/history.js"></script>
        <script type="text/javascript" src="js/loading.js?202106161409"></script>
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
                    if ("{$_POST['url']}" !== "") {
                        concole.log("called");
                        document.cookie = "event_url_history=" + "{$_POST['url']}" + "; max-age=5184000";
                    }
                </script>
                EOM;
            }
        ?>
        
        <!-- 動作確認アンケート -->
        <div class="popup_wrap" id="popup_survey" style="display:none;">
            <input id="trigger_survey" type="checkbox" checked="checked">
            <div class="popup_overlay">
                <label for="trigger_survey" class="popup_trigger"></label>
                <div class="popup_content">
                    <div class="text_title">動作確認アンケート</div>
                    <p>アンケート調査へのご協力をお願いします。</p>
                    <p>ご利用の端末での動作状況についてご回答してください。</p>
                    <div class="space"></div>
                    
                    <!-- <p style="text-align:left;">1. 端末の OS の種類</p>
                    <p>
                        <input type="radio" name="OS" value="Android">Android
                        <input type="radio" name="OS" value="iOS">iOS
                        <input type="radio" name="OS" value="その他">その他
                    </p>
                    <div class="space"></div>
                  
                    <p style="text-align:left;">2. ブラウザの種類</p>
                    <p>
                        <input type="radio" name="browser" value="Google Chrome">Google Chrome
                        <input type="radio" name="browser" value="Safari">Safari
                        <input type="radio" name="browser" value="Firefox">Firefox
                        <input type="radio" name="browser" value="その他">その他
                    </p>
                    <div class="space"></div> -->
                  
                    <p style="text-align:left;">1. トップページでピンクの輪が回転する画像が表示されたか</p>
                    <p>
                        <input type="radio" name="display-top" value="表示された">表示された
                        <input type="radio" name="display-top" value="表示されなかった">表示されなかった
                        <input type="radio" name="display-top" value="わからない">わからない
                    </p>
                    
                    <div class="space"></div>
                    <p style="text-align:left;">2. このページに遷移する間も、画像はそのまま表示されていたか</p>
                    <p>
                        <input type="radio" name="display-transition" value="回転して表示された">回転して表示された
                        <input type="radio" name="display-transition" value="止まって表示された">止まって表示された
                        <input type="radio" name="display-transition" value="表示されなかった">表示されなかった
                        <input type="radio" name="display-transition" value="わからない">わからない
                    </p>
                    <div class="space"></div>
                  
                    <div style="text-align:right; margin-right: 30px;">
                        <input type="button" value="送信" onclick="load_for_survey('send_data.php', gather_data(['display-top', 'display-transition']))">
                    </div>
                                        
                    <div class="space"></div>
                    <label for="trigger_survey" class="close_btn"><img src="img/close_btn.png" width=30px></label>
                </div>
            </div>
        </div>
        
        <script type="text/javascript">
            // check_popup_ver(1.4, 'popup_survey');
        </script>
        
        <div id="loading" style="display:none;">
            <div class="loadingMsg"></div>
        </div>

        <input type="button" onclick="location.href='index.php';" value="戻る">
    </body>
</html>