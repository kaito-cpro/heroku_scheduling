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
        <link rel="stylesheet" href="style.css?202105291615" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.8/brython.js" integrity="sha256-rA89wPrTJJQFWJaZveKW8jpdmC3t5F9rRkPyBjz8G04=" crossorigin="anonymous"></script>
        <script type="text/javascript" src="highlight_table.js"></script>
    </head>
    <body onload="brython()"> 
        <h1>調整さん 拡張機能</h1>
            
        <?php
            exec("export LANG=ja_JP.UTF-8");
            $command="python exec_from_php.py ".$_POST['url'];
            exec($command,$output,$rtn);
            
            foreach ($output as $o) {
                echo $o;
            }
        ?>
        
        <?php
            echo <<<EOM
            <script type="text/javascript">
                document.cookie = "event_url_history=" + {$_POST['url']};
            </script>
            EOM;
        ?>
        
        <input type="button" onclick="history.back()" value="戻る">
    </body>
</html>