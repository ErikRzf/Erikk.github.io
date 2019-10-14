<?php
$servername="localhost";
$username="root";
$password="";
$database="fikshop";
$connection=mysqli_connect($servername, $username, $password , $database);
if(!$connection){
    die("Koneksi Gagal: " .mysqli_connect_error());

}
echo "Koneksi Berhasil";
mysqli_close($connection);
// or die("Kesalahan Koneksi!");
// mysql_select_db($namadatabase, $connection) or die("Databasenya Error");
// echo "Koneksi Sukses";
?>