<?php

 header("Access-Control-Allow-Origin:*");
 header("Access-Control-Allow-Headers:*");
 header("Access-Control-Allow-Methods:*");
 
 include("connect.php");
 
 $data = file_get_contents("php://input");
 $user =  json_decode($data, true);
 $name = $user["name"];
 $email = $user["email"];
 $password = $user["password"];

 $sql ="SELECT * FROM teachers WHERE email = '$email'";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    echo  'exist';}
    else {
        echo 'notexist';
    }

if($exist == 'exist'){
    echo 'the user is already in the database';
}else {
    if($name != '' and $password != '' and $password) {       
        $sql  ="INSERT INTO prefect (name , email , password) VALUES ('$name' , '$email' , '$password')";
        $result = mysqli_query($conn, $sql);
        if ($result){
            echo "data inserted successfully";
        }
    }else {
        echo 'please fill all required data';
    }
}
    
 ?>