<?php

 header("Access-Control-Allow-Origin:*");
 header("Access-Control-Allow-Headers:*");
 header("Access-Control-Allow-Methods:*");
 
 include("connect.php");
 
 $userdata = file_get_contents("php://input");
 $data = json_decode($userdata , true);
 
 $id = $data["data"]["id"];

 $sql = "DELETE FROM students where id = '$id'";
 $result = mysqli_query($conn,$sql);

 if($result){
    echo 'delete';
 }else{
    echo 'something went wrong';
 }  

 

?>