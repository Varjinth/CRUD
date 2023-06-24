<?php
$host = "localhost";
$user = "root";
$pass = "V@rji5697";
$db = "mydatabase";
$conn = mysqli_connect($host, $user, $pass, $db);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
