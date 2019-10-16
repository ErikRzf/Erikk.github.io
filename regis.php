<?php

// $name = "";
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $name= test_input($_POST["Firstname"]);

// }


$nameErr = "";
$message = "Nama Anda Kosong.";
if(isset($_POST['submit'])){
    if(empty($_POST['Firstname'])){
        // echo "<h4 style='color:red'>Nama anda kosong!</h4>"
        // $nameErr = "KOSONG" ;
        echo "<SCRIPT> alert('$message') </SCRIPT>";
        echo "<SCRIPT> location='register.php'</SCRIPT>";

} else{
    echo"Selamat";
}
}
?>