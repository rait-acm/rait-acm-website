<?php
$file = $_GET['file'] . ".pdf";
header("content-disposition: attachment; filename=" . urlencode("Certificates/Hour Of Code/".$file));
$fb = fopen("Certificates/Hour Of Code/".$file,"r");
while(!feof($fb)){
    echo fread($fb,8192);
    flush();
}
fclose($fb);
?>