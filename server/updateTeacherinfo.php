<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Access-Control-Allow-Methods:*");

include("connect.php");

$data = file_get_contents("php://input");
$user =  json_decode($data, true);

$id= $user["id"];
$fname = $user["fname"];
$lname = $user["lname"];
$email = $user["email"];
$phone = $user["number"];
$course = $user["course"];
$city = $user['city'];
$degree = $user['degree'];

$sql  =  "UPDATE teachers set firstname = '$fname', lastname='$lname' , email = '$email' , course='$course', city='$city' , degree = '$degree' , phone ='$phone' where id='$id'";
$result = mysqli_query($conn , $sql);

if($result){
 echo 'data updated successfully';
}
else{
echo 'something went wrong';
}


?>