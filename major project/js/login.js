//$(document).on("pagecreate","#pageone",function() {
$(document).ready(function() {
	
	$('#loginTxtEmail').on('keypress',function(e) {
		if(e.keyCode == 13) {
		    if($('#loginTxtPass').val())
		    {
				loging();
		    }
		    else {
				$('#loginTxtPass').focus();
		    }
		}
	});
	    
	$('#loginTxtPass').on('keypress',function(e) {
	    if(e.keyCode == 13) {
			if($('#loginTxtEmail').val())
			{
				loging();
			}
			else {
				$('#loginTxtEmail').focus();
				
				$('div#popupError div#successBody p.errorMessage').text('Please Enter Username');
				$('#popupError').popup('open');
			}
	    }
	});
	    
	$('#loginBtnSubmit').on('click',function(e) {
	    e.preventDefault();
		//touchAnimation(e);
		
	    loging();
	});
	
	if($('#rememberMe').is(':checked'))
	{
	    loging();
	}
	
	function loging()
	{
	    if($('#loginTxtEmail').val() && $('#loginTxtPass').val())
	    {
			var rememberMe='N';
			//var isChecked = $('#rememberMe').is(':checked');
			//if(isChecked === true)
			//{
				//rememberMe='Y';
			//}
			
			$('#submitting').show();
			$.ajax({
				//beforeSend: function() { $.mobile.loading('show'); }, //Show spinner
				//complete: function() { $.mobile.loading('hide'); }, //Hide spinner
				url: "includes/login-check.php",
				type: "POST",
				data: {action: 'confirmLoginMobile',email: $('input#loginTxtEmail').val(),password: $('input#loginTxtPass').val(),rememberMe : rememberMe},
				//dataType: "json",
				success: function(result){
					if(result=='done') {
						//$('#submitting').hide();
						location.replace('m-dashboard.php');
					}
					else {
						$('#submitting').hide();
						$('div#popupError div#successBody p.errorMessage').html(result);
						$('#popupError').popup('open');
					}
				},
				error: function () {
					$('#submitting').hide();
					$('#loginErrorMsg').html('We did not recognize the email or password you entered. Please try again.');
					$('div#popupError div#successBody p.errorMessage').html('We did not recognize the email or password you entered. Please try again.');
					$('#popupError').popup('open');
				}
			});
	    }
	    else {
			$('#loginErrorMsg').html('We did not recognize the email or password you entered. Please try again.');
			$('div#popupError div#successBody p.errorMessage').html('We did not recognize the email or password you entered. Please try again.');
			$('#popupError').popup('open');
	    }
	}
	
	/* reclaim pssword */
    $('div.loginForgotPassword div.inputRowMed').on('tap', 'a#mailPassWord', function(e) {
		e.preventDefault();
		//touchAnimation(e);
		
		if($('#reclaimAccount').val())
        {
			$.ajax({
				url: "service/user.php",
				type: "POST",
				data: {action: 'resendPassword',email: $('input#reclaimAccount').val()},
				//dataType: "json",
				success: function(result) {
					if(result=='done') {
						var	msgz = 'Your password was sent to "'+$('input#reclaimAccount').val()+'"<BR/> Please check spam folder if you do not see this email from Kamwo in your inbox.';
						
						$("#popupSuccess p.successMessage").html(msgz);
						$("#popupSuccess").popup("open");
						$('input#reclaimAccount').val('');
					}
					else if(result.indexOf('done_')>=0) {
                        var phoneNumber = result.match(/\d+/);
                        
                        var msgzz = 'Your password was sent to '+$('input#reclaimAccount').val()+' and SMS message to '+phoneNumber+'<BR> Please check spam folder if you do not see this email from Kamwo in your inbox. <br/><br/><strong>If you do not receive any email, please email us at customerservice@wtf.ind.in</strong>';
                                                
                        $("#popupSuccess p.successMessage").html(msgzz);
						$("#popupSuccess").popup("open");
						$('input#reclaimAccount').val('');
                    }
					else {
						$('#popupAlert p#alertMessagez').html(result);
						$('#popupAlert').popup('open');
					
						$('input#reclaimAccount').val('');
					}
				},
				error: function () {
					$('#popupAlert p#alertMessagez').html('error in sending password');
					$('#popupAlert').popup('open');
				}
			});
		}
        else {
			$('#popupAlert p#alertMessagez').html('Email cannot be blank..');
			$('#popupAlert').popup('open');
        }
    });
	
	/** header click **/
    //$('#customHeader').on('tap', function() {
    //    $('#customHeader').css('border','1px solid #ffa200');
    //});
	
});
