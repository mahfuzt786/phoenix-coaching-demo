
<?php
	header('Access-Control-Allow-Origin: *');

    session_start();
    require_once '../includes/database-config.php';
    require_once '../includes/util.php';
    
    $action = $_REQUEST['action']; //Calling program must pass action
	//$userId = $_SESSION[SESS_LOGIN_ID];
    $userId = '1';
	
    if ($action == "getItemAll" )
    {
        getItemAll( $mysqli );
    }
	elseif ($action == "getItem" )
    {
        getItem( $mysqli );
    }
    elseif ($action == "postItem" )
    {
        postItem( $mysqli,$userId );
    }
	elseif ($action == "editItem" )
    {
        editItem( $mysqli,$userId );
    }
	elseif ($action == "deleteItem" )
    {
        deleteItem( $mysqli );
    }
    else
    {
        throw new Exception("Unknown Action: " + $action);
    }
    
    
/******************************************************************************
 *                     Service Implementation Begins                          *
 ******************************************************************************/
    
    /* get Item List */
    function getItemAll($mysqli) {
        $allProductz        = new stdClass();
		$cityId          	= cleanValue($mysqli, getPost('cityId'));
        	
        $sql='';
        $arRes = '';
		
		$sql="SELECT *
				FROM test.faculty_details";
				
        $arRes = $mysqli->query($sql);
        if (!$arRes)
        {
            $allProductz->status = '1';
            $allProductz->message = $mysqli->error;
        }
        else {
            $allProductz->status = '0';
        }
        if ( empty( $arRes ) ) {
            return null;
        }
        
        $allResults='';
        $allResults = array();
        while ( $arRow = $arRes->fetch_object()) {
            $allResults[] = $arRow;
        }
        $allProductz->products = $allResults;
        
        echo json_encode($allProductz);
    }
	
	function getItem($mysqli) {
        $adviceId          	= cleanValue($mysqli, getPost('adviceId'));
        $allProductz        = new stdClass();
        	
        $sql="SELECT *
				FROM test.faculty_details";
				
        $arRes = $mysqli->query($sql);
        if (!$arRes)
        {
            $allProductz->status = '1';
            $allProductz->message = $mysqli->error;
        }
        else {
            $allProductz->status = '0';
        }
        if ( empty( $arRes ) ) {
            return null;
        }
        
        $allResults='';
        $allResults = array();
        while ( $arRow = $arRes->fetch_object()) {
            $allResults[] = $arRow;
        }
        $allProductz->products = $allResults;
        
        echo json_encode($allProductz);
    }
    
    
    /* post Item details */
    function postItem($mysqli,$userId) {
		$f_id      = cleanValue($mysqli, getPost('f_id'));
		$name      = cleanValue($mysqli, getPost('name'));
		$qualification      = cleanValue($mysqli, getPost('qualification'));
		$course_id      = cleanValue($mysqli, getPost('course_id'));
		//$subject_id      = cleanValue($mysqli, getPost('subject_id'));
		$email      = cleanValue($mysqli, getPost('email'));
		$ph_no      = cleanValue($mysqli, getPost('ph_no'));
		$password      = cleanValue($mysqli, getPost('password'));
		$address      = cleanValue($mysqli, getPost('address'));
		
        $allProductz        = new stdClass();
		
		$checkInputz		= checkInputs($mysqli);
		
		if($checkInputz == 'valid')
		{
			$allProductz->status = '1';
        
			$sql="INSERT  INTO test.faculty_details (f_id, name, qualification, course_id, email, ph_no, password, address)
				VALUE ('$f_id', '$name', '$qualification', '$course_id', '$email', '$ph_no', '$password', '$address')";
			
			$arRes = $mysqli->query($sql);
			
			if (!$arRes)
			{
				$allProductz->status = '1';
				$allProductz->message = $mysqli->error;
			}
			else {
				$allProductz->status = '0';
				$allProductz->message = 'done';
			}
			if ( empty( $arRes ) ) {
				return null;
			}
		}
		else {
			$allProductz->status = '1';
			$allProductz->message = $checkInputz;
		}
		
		echo json_encode($allProductz);
    }
	
	/* edit Item details */
    function editItem($mysqli,$userId) {
        
        $f_id      = cleanValue($mysqli, getPost('f_id'));
		$name      = cleanValue($mysqli, getPost('name'));
		$qualification      = cleanValue($mysqli, getPost('qualification'));
		$course_id      = cleanValue($mysqli, getPost('course_id'));
		//$subject_id      = cleanValue($mysqli, getPost('subject_id'));
		$email      = cleanValue($mysqli, getPost('email'));
		$ph_no      = cleanValue($mysqli, getPost('ph_no'));
		$password      = cleanValue($mysqli, getPost('password'));
		$address      = cleanValue($mysqli, getPost('address'));
		
        $allProductz        = new stdClass();
		
		$checkInputz		= checkInputs($mysqli);
		
		if($checkInputz == 'valid')
		{
			$allProductz->status = '1';
        
			$sql="UPDATE test.faculty_details
							SET name      = '$name',
								qualification      = '$qualification',
								course_id      = '$course_id',
								email      = '$email',
								ph_no      = '$ph_no',
								password      = '$password',
								address      = '$address'
							WHERE f_id = '$f_id'";
			$arRes = $mysqli->query($sql);
			if (!$arRes)
			{
				$allProductz->status = '1';
				$allProductz->message = $mysqli->error;
			}
			else {
				$allProductz->status = '0';
				$allProductz->message = 'done';
			}
			if ( empty( $arRes ) ) {
				return null;
			}
		}
		else {
			$allProductz->status = '1';
			$allProductz->message = $checkInputz;
		}
		
		echo json_encode($allProductz);
    }
	
	/* delete Item details */
    function deleteItem($mysqli) {
        
        $f_id          	= cleanValue($mysqli, getPost('f_id'));
		
        $allProductz        = new stdClass();
        
        $sql="DELETE FROM test.faculty_details
						WHERE f_id = '$f_id'";
        $arRes = $mysqli->query($sql);
        if (!$arRes)
        {
            $allProductz->status = '1';
            $allProductz->message = $mysqli->error;
        }
        else {
            $allProductz->status = '0';
			$allProductz->message = 'done';
        }
        if ( empty( $arRes ) ) {
            return null;
        }
		
		echo json_encode($allProductz);
    }
	
	function checkInputs($mysqli)
	{
		$f_id      = cleanValue($mysqli, getPost('f_id'));
		$name      = cleanValue($mysqli, getPost('name'));
		$qualification      = cleanValue($mysqli, getPost('qualification'));
		$course_id      = cleanValue($mysqli, getPost('course_id'));
		//$subject_id      = cleanValue($mysqli, getPost('subject_id'));
		$email      = cleanValue($mysqli, getPost('email'));
		$ph_no      = cleanValue($mysqli, getPost('ph_no'));
		$password      = cleanValue($mysqli, getPost('password'));
		$address      = cleanValue($mysqli, getPost('address'));
		
		if( $f_id == '' || $f_id == null)
        {
            return "Please select faculty id";
        }
		elseif($name == '' || $name == null) {
			return "Please enter name";
		}
		elseif($qualification == '' || $qualification == null) {
			return "Please enter qualification";
		}
		elseif($course_id == '' || $course_id == null) {
			return "Please enter course id";
		}
		elseif($email == '' || $email == null) {
			return "Please enter email";
		}
		elseif($ph_no == '' || $ph_no == null) {
			return "Please enter phone number";
		}
		elseif($password == '' || $password == null) {
			return "Please enter password";
		}
		elseif($address == '' || $address == null) {
			return "Please enter address";
		}
		else {
			return "valid";
		}
	}
    
?>
