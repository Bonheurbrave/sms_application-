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

 $selsql ="SELECT * FROM appliedPrefect WHERE name = '$name' and email='$password'";
 $result1 = mysqli_query($conn, $selsql);

if (mysqli_num_rows($result1) > 0) {
    echo 'the user already inserted';
    }
    else {
        
        if($name != '' and $password != '' and $password) {
            $sql  ="INSERT INTO appliedPrefects (name , email , password) VALUES ('$name' , '$email' , '$password')";
            $result = mysqli_query($conn, $sql);
            if ($result){
                echo "data inserted successfully";
            }
        }else {
            echo 'please fill all required data';
        }
        
    }
        ?>