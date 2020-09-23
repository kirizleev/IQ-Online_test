<?php
    $today = getdate();
    $date = $_POST['date'];
    $sum = $_POST['sum'];
    $period = $_POST['period'];
    $refill = $_POST['refill'];
    $refillSum = $_POST['refillSum'];
    
    if('refill' == 'refillYes'){
        if($refillSum.val() == ''){$refillSum = 0}
        else{$refillSum.val() = $_POST['refillSum'];}
    }
    else{
        $refillSum = 0;
    }
?>