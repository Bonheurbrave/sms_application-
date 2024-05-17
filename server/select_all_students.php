<?php

header("Access-Control-Allow-Origin:*");
 header("Access-Control-Allow-Headers:*");
 header("Access-Control-Allow-Methods:*");
 
 include("connect.php");

 $sql = 'SELECT * FROM students';

 $result = mysqli_query( $conn,$sql);
 $json_data =  array();
 while($row = mysqli_fetch_assoc($result)){
    $json_data[] = $row ;

 }
 echo json_encode(["result"=>$json_data ]);

?>