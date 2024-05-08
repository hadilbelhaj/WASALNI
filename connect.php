<?php 


// Create connection
function connect(){
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $database = "pwasalni";
    $conn = new mysqli($servername, $username, $password, $database);
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}
    mysqli_set_charset($conn,"utf8");
    return $conn;

    } 
// Check connection}
?>