<?php

//include "dbcon.php";
include "login(php).php";

//session_start();
session_destroy();
//echo "done";
header("location: ../index.html");
?>