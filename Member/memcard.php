<?php 
include 'login(php).php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <!-- Basic SEO -->
     <meta name="description" content="Membership Card of Rait Acm Student Chapte">
    <!-- add description -->
    <meta name="keywords" content="ACM,rait acm,student community,blogs,workshop,events,">

    <!-- Favicon -->
    <link rel="icon" href="../assets/img/acmlogo.png" />
    <link rel="stylesheet" href="../assets/css//memcard.css">
    <title>Member Card</title>
</head>
<body>
    <div class="card">
        <div class="acm-logo">
            <img class="pic" src="../assets/img/acmlogo.png" alt="logo">
        </div>
        <div class="details">
            <h2 class="name"><?php echo $_SESSION['name'] ?></h2>
            <p class="post"><?php echo $_SESSION['post'] ?></p>
            <?php $v = strval($_SESSION['password']);
                $r = (str_split($v));
                $r[2] = "*";
                $r[3] = "*";
                $r[4] = "*";
                $r[5] = "*";
                //Hello world
            ?>
            <p class="mem-id">MEMBERSHIP ID : <?php echo implode("",$r); ?></p>
        </div>
    </div>
</body>
</html>