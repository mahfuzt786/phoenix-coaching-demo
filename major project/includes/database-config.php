<?php
    try
    {
        $host='localhost';
        $database='test'; //DB name
        $user='root';
        $pass='';
		
        // connect (create a new MySQLi object)
        @   $mysqli = new mysqli($host, $user, $pass, $database);
             
        //checking for connection error
        if (mysqli_connect_errno())
        {
            throw new Exception(mysqli_connect_error());
        }
        
        $mysqli->set_charset("utf8");
    }
    catch (Exception $e)
    {
        echo $e->getMessage();
    }
?>
