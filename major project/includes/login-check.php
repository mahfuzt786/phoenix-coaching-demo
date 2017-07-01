<?php

session_start();

require_once 'constants.php';
require_once 'database-config.php'; /* Database Settings */
require_once 'util.php';


/*  When a user click the login button */
$action = $_REQUEST['action']; //Calling program must pass action

if ($action == "confirmLoginMobile") {
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
			setcookie('__UserE', $emailId, $expire, '/');
			setcookie('__PassE', $pass, $expire,'/');
			setcookie('rememberMeE', 'checked', $expire,'/');
		} else {
			setcookie('__UserE', '', time() - 3600,'/');
			setcookie('__PassE', '', time() - 3600,'/');
			setcookie('rememberMeE', '', time() - 3600,'/');
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
	//$password	= base64_encode($password);
    $sql = "SELECT user.*
					FROM test.user
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
		$_SESSION[SESS_USER_TYPE] = $row->userType;
        $remote_addr = $_SERVER['REMOTE_ADDR'];
        $sql = "INSERT  
						INTO test.userlogin 
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