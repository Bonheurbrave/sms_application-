<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:*");
header("Access-Control-Allow-Headers:*");

include("connect.php");
$userdata = file_get_contents("php://input");
$data =  json_decode($userdata, true);
$email = $data["email"];
$password = $data["password"];
$sql ="SELECT * FROM admin_table WHERE email = '$email' and password = '$password'";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    echo  'exist';}
    else {
        echo 'notexist';
    }


?>