<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Access-Control-Allow-Methods:*");

include ("connect.php");

$data = file_get_contents("php://input");
$user = json_decode($data, true);



$fname = $user["fname"];
$lname = $user["lname"];
$email = $user["email"];
$birthdate = $user["birthdate"];
$section = $user["section"];
$year = $user['year'];
$phone = $user['number'];


$sql = "SELECT * FROM students WHERE firstname = '$fname' and lastname = '$lname' and section='$section' and year='$year' and phone='$phone'";
$exist;
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $exist = 'exist';
} else {
    $exist = 'notexist';    
}

if ($exist == 'exist') {
    echo 'the use already exist';
} else {

    if ($fname != '' and $lname != '' and $birthdate != '' and $section != '' and $year != '' and $phone != '') {
        $sql = "INSERT INTO students (firstname , lastname , phone ,  year , section , email , birthdate) VALUES ('$fname' , '$lname' , '$phone' , '$year' , '$section' , '$email' , '$birthdate')";
        $result = mysqli_query($conn, $sql);
        if ($result) {
            echo "data inserted successfully";
        }
    } else {
        echo "please fill all inputs";
    }
}

?>