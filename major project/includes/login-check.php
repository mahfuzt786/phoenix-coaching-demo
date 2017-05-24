<?php

session_start();

require_once 'constants.php';
require_once 'database-config.php'; /* Database Settings */
require_once 'util.php';


/*  When a user click the login button */
$action = $_REQUEST['action']; //Calling program must pass action

if ($action == "confirmLogin") {
    confirmLogin($mysqli);
}else {
    throw new Exception("Unknown Action: " + $action);
}

function confirmLogin($mysqli) {
    $error = 'false';
    $erroremail = '';

    //$emailId= trim(stripslashes($_POST['email']));
    //$pass= trim(stripslashes($_POST['password']));

    $emailId 	= trim(stripslashes(getRequestPostDefault('email', 'null')));
    $pass 		= trim(stripslashes(getRequestPostDefault('password', 'null')));
	$rememberMe	= trim(stripslashes(getRequestPostDefault('rememberMe', 'N')));
	
    if (isValidIdPassword($emailId, $pass, $mysqli)) {
		$expire=time()+60*60*24*30;
		//if (isset($_POST['rememberMe']))
		if($rememberMe=='Y')
		{
			setcookie('__UserK', $emailId, $expire, '/');
			setcookie('__PassK', $pass, $expire,'/');
			setcookie('rememberMeK', 'checked', $expire,'/');
		} else {
			setcookie('__UserK', '', time() - 3600,'/');
			setcookie('__PassK', '', time() - 3600,'/');
			setcookie('rememberMeK', '', time() - 3600,'/');
		}
			
        echo 'done';
    } else {
        echo 'Invalid username or password.' . "<br/>" .
        'If you do not know the password, Contact us at customerservice@wtf.ind.in';
    }
}
function isValidIdPassword($loginId, $password, $mysqli) {

    if (!filter_var($loginId, FILTER_VALIDATE_EMAIL)) {
        return false;
    }

    $sql = "SELECT user.*
					FROM krishibotor.user
				   WHERE loginId='$loginId'
					 AND password='$password'";
    $arRes = $mysqli->query($sql);
    if (!$arRes) {
        throw new Exception($mysqli->error);
    }

    if (mysqli_num_rows($arRes) == 0) {
        return false;
    } else {
        $row = $arRes->fetch_object();
        $_SESSION[SESS_LOGIN_ID] = $row->userId;
        $_SESSION[SESS_LOGIN_NAME] = $row->first_name . ' ' . $row->last_name;
        $remote_addr = $_SERVER['REMOTE_ADDR'];
        $sql = "INSERT  
						INTO krishibotor.userlogin 
							 (userId,remote_addr)
					   VALUE (" . $_SESSION[SESS_LOGIN_ID] . ",'" . $remote_addr . "')";
        $arRes = $mysqli->query($sql);
        if (!$arRes) {
            throw new Exception($mysqli->error);
        }
		
		

        return true;
    }
}

?>