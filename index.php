<?php
    $command="python exec_from_php.py ";
    exec($command,$output);
    print "$output[0]\n";
    print "$output[1]\n";
?>