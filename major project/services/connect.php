<?php
$localhost='localhost';
$dbname='simple_login';
$user='root';
$pwd='';
$con=mysql_connect($localhost,$user,$pwd) or die(mysql_error());
$db=mysql_select_db($dbname,$con) or die("Database not found!");
?>