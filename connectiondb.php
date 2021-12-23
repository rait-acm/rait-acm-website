<?php
$servername = "localhost";
//---- hosted credentials----
// $username = "raithost_raithos";
// $password = "gpXY#ZF8JSVi";
// $dbname = "raithost_raitacm";

//===local conn===
$username = "root";
$password = "";
$dbname = "raithost_raitacm";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>