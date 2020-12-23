<html>
    <head>
        <title>調整さん 拡張機能(仮)</title>
        <meta charset="utf-8">
    </head>
    <body onload="brython()">
        <h1>調整さん 拡張機能(仮)</h1>
        
        <?php
            exec("export LANG=ja_JP.UTF-8");
            $command="python exec_from_php.py ".$_POST['url'];
            exec($command,$output,$rtn);
            
            foreach ($output as $o) {
                echo $o;
            }
        ?>
    </body>
</html>