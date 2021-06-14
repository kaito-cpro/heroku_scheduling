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
        
        <input type="button" onclick="location.href='index.php';" value="戻る">
    </body>
</html>