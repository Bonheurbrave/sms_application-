<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Access-Control-Allow-Methods:*");

include("connect.php");

$data = file_get_contents("php://input");
$user =  json_decode($data, true);
$fname = $user["fname"];
$lname = $user["lname"];
$email = $user["email"];
$birthdate = $user["birthdate"];
$section = $user["section"];
$year = $user['year'];
$phone = $user['number'];
$id  = $user["id"];

$sql  =  "UPDATE students set firstname = '$fname', lastname='$lname' , email = '$email' , birthdate='$birthdate', section='$section' , year='$year' , phone ='$phone' where id='$id'";
$result = mysqli_query($conn , $sql);

if($result){
 echo 'data updated successfully';
}
else{
echo 'something went wrong';
}


?>