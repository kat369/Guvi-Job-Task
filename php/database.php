<?php

$host = "localhost:3306";
$dbname = "login_db";
$username = "root";
$password = "";


$mysqli = new mysqli( hostname : $host, 
                      username : $username, 
                      password : $password, 
                      database : $dbname);
if ($mysqli->connect_errno){
    die("connection error: " . $mysqli->connect_errno);
}

return $mysqli;