<html>
    <head>
        <title>調整さん 拡張機能(仮)</title>
        <meta charset="utf-8">
    </head>
    <body onload="brython()">
        <h1>調整さん 拡張機能(仮)</h1>
        
        <?php
            $command="python exec_from_php.py ";
            exec($command,$output,$_POST['url']);
            print "$output[0]\n";
            print "$output[1]\n";
        ?>

    </body>
</html>