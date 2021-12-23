<?php
$file = $_GET['file'] . ".pdf";
header("content-disposition: attachment; filename=" . urlencode("certi/".$file));
$fb = fopen("certi/".$file,"r");
while(!feof($fb)){
    echo fread($fb,8192);
    flush();
}
fclose($fb);
?>