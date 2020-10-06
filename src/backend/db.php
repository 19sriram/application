<?php
$DBServer = 'localhost'; // e.g 'localhost' or '192.168.1.100'
$DBUser   = 'root';
$DBPass   = '';
$DBName   = 'exampledb';
$connection = mysqli_connect($DBServer, $DBUser, $DBPass, $DBName);

//$connection = mysql_connect('localhost', 'root', '');
if (!$connection){
      echo 'connection fialed';
    die("Database Connection Failed" . mysql_error());
}
if (!$connection){
    die("Database Selection Failed" . mysql_error());
}
if (!$DBName){
    die("Database Selection Failed" . mysql_error());
}
else {
	echo "success db";
}
?>
