<html>
    <head>
        <title>調整さん 拡張機能(仮)</title>
        <meta charset="utf-8">
    </head>
    <body onload="brython()">
        <h1>調整さん 拡張機能(仮)</h1>
        
        <?php
            $command="sudo python exec_from_php.py ".$_POST['url'];
            exec($command,$output);
            foreach ($output as $o) {
                echo $o.'<br>';
            }
        ?>

    </body>
</html>