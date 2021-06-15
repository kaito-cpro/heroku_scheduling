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
        <link rel="stylesheet" href="style.css?202106060155" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.8/brython.js" integrity="sha256-rA89wPrTJJQFWJaZveKW8jpdmC3t5F9rRkPyBjz8G04=" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script type="text/javascript" src="highlight_table.js"></script>
        <script type="text/javascript" src="ignore_resize.js"></script>
        <script type="text/javascript" src="loading.js"></script>
        <script src="send_data.py"></script>
    </head>
    <body onload="brython()"> 
        <h1>調整さん 拡張機能</h1>
            
        <?php
            exec("export LANG=ja_JP.UTF-8");
            $command="python make_table.py ".$_POST['val'];
            exec($command,$output,$rtn);
            
            $valid = True;
            foreach ($output as $o) {
                if ($o == "invalid flag") $valid = False;
                else echo $o;
            }
            
            if ($valid) {
                echo <<<EOM
                <script type="text/javascript">
                    if ("{$_POST['url']}" !== "") {
                        document.cookie = "event_url_history=" + "{$_POST['url']}" + "; max-age=5184000";
                    }
                </script>
                EOM;
            }
        ?>
        
        <!-- 動作確認アンケート -->
        <!-- <div class="popup_wrap" id="popup_survey" style="display:none;"> -->
        <div class="popup_wrap" id="popup_survey">
            <input id="trigger_survey" type="checkbox" checked="checked">
            <div class="popup_overlay">
                <label for="trigger_survey" class="popup_trigger"></label>
                <div class="popup_content">
                    <div class="text_title">動作確認アンケート</div>
                    <p>ご利用の端末で本アプリが正常に動作しているかのアンケート調査にご協力をお願いします。</p>
                    <br>
                    
                    <p style="text-align:left;">1. 端末の OS の種類</p>
                    <p>
                        <input type="radio" name="OS">Android
                        <input type="radio" name="OS">iOS
                        <input type="radio" name="OS">その他
                    </p>
                  
                    <p style="text-align:left;">2. ブラウザの種類</p>
                    <p>
                        <input type="radio" name="browser">Chrome
                        <input type="radio" name="browser">Safari
                        <input type="radio" name="browser">Firefox
                        <input type="radio" name="browser">その他
                    </p>
                  
                    <p style="text-align:left;">3. ページ遷移中に桜の花びらが表示されたか</p>
                    <p>
                        <input type="radio" name="show">表示された
                        <input type="radio" name="show">表示されなかった
                    </p>
                  
                    <div style="text-align:right; margin-right: 60px;">
                        <input type="button" value="送信" onclick="document.write('<?php exec_send_data() ?>');">
                    </div>
                    
                    <?php
                        function exec_send_data() {
                            exec("export LANG=ja_JP.UTF-8");            
                            $command="python send_data.py"."test-data";
                            exec($command,$output,$rtn);                           
                        }
                    ?>
                                        
                    <div class="space"></div>
                    <label for="trigger_survey" class="close_btn"><img src="img/close_btn.png" width=30px></label>
                </div>
            </div>
        </div>
        
        <input type="button" onclick="location.href='index.php';" value="戻る">
    </body>
</html>