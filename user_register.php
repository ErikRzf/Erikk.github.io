<?php
include 'koneksi.php';
// menyimpan data kedalam variabel
$Fname           = $_POST['Fname'];
$Lname           = $_POST['Lname'];
$Username        = $_POST['Username'];
$Password        = $_POST['Password'];
// query SQL untuk insert data
$query="INSERT INTO fikshop SET Fname='$Fname',Lname='$Lname',Username='$Username',Password='$Password'";
mysqli_query($koneksi, $query);
// mengalihkan ke halaman index.php
header("location:login.html");
?>