<?php

 header("Access-Control-Allow-Origin:*");
 header("Access-Control-Allow-Headers:*");
 header("Access-Control-Allow-Methods:*");
 
 include("connect.php");
 
 $data = file_get_contents("php://input");
 $user =  json_decode($data, true);
 
 

$fname = $user["fname"];
$lname = $user["lname"];
$phone = $user['number'];
$course = $user["course"];
$city = $user["city"];
$email = $user["email"];
$degree = $user["degree"];
$exist ;

$sql ="SELECT * FROM teachers WHERE email = '$email' and phone = '$phone'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    $exist = 'exist';
}
    else {
     $notexist = 'notexist';
}

    if ($exist == 'exist') {
        echo 'the user already exist';
    }else {

        
        
        if($fname != '' and $lname != '' and $course != '' and $city != '' and $degree != '' and  $phone != ''){
            $sql  ="INSERT INTO teachers (firstname , lastname , phone ,  course, city , email , degree) VALUES ('$fname' , '$lname' , '$phone' , '$course' , '$city' , '$email' , '$degree')";
            $result = mysqli_query($conn, $sql);
            if ($result){
                echo "data inserted successfully";
            }
        }else {
            echo "please fill all inputs";
        }
    }
        
        ?>
 