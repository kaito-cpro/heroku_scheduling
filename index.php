<html>
    <head>
        <title>BrythonでBMIを計算する</title>
        <meta charset="utf-8">
    </head>
    <body onload="brython()">
        <h1>BrythonでBMIを計算する</h1>
        
        <?php
            $command="python exec_from_php.py ";
            exec($command,$output);
            print "$output[0]\n";
            print "$output[1]\n";
        ?>

        <form action="sample.php" method="post">
            <h1><font color="#FF7F50">じゃーんけーん</font></h1><br /><br />
            <font size="5"><input type="radio" name="janken" value=1>グー<br />
            <input type="radio" name="janken" value=2>チョキ<br />
            <input type="radio" name="janken" value=3>パー<br /><br /></font>
            <input type="submit" name="submit" />
        </form>
    </body>
</html>