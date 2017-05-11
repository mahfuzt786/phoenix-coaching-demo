$(document).ready(function(){
    $("div.row1").on("click","a#bt",function(){
        var v1,v2,v3,v4,v5,v6,v7,v8;
        v1=$("div.row1 input#st_id").val();
        v2=$("div.row1 input#admission").val();
        v3=$("div.row1 input#name").val();
        v4=$("div.row1 input#course").val();
        v5=$("div.row1 textarea#address").val();
        v6=$("div.row1 input#password").val();
        v7=$("div.row1 input#contact").val();
        v8=$("div.row1 input#email").val();
        if(v1===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Student ID');
			$('div#popupError').popup("open");
        }
        else if(v2===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Admission No');
			$('div#popupError').popup("open");
        }
        else if(v3===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Name');
			$('div#popupError').popup("open");
        }
        else if(v4===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Course');
			$('div#popupError').popup("open");
        }
        else if(v5===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Address');
			$('div#popupError').popup("open");
        }
        else if(v6===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Password');
			$('div#popupError').popup("open");
        }
        else if(v7===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Contact Number');
			$('div#popupError').popup("open");
        }
        else if(v8===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Email ID');
			$('div#popupError').popup("open");
        }
		else if(!IsEmail(v8))
		{
			$('div#popupError div#successBody p.errorMessage').text('Please enter email in xxxxx@xxx.xxx format. ie john.doe@gmail.com');
			$('div#popupError').popup("open");
		}
        else{
            $('div#popupError div#successBody p.errorMessage').text('Submit');
			$('div#popupError').popup("open");
			
            $("div.row1 input#ad").val(v1);
        }
        
        });
		
		/*phone number check*/
		$('#contact').keyup(function () {
			if (!this.value.match(/^([0-9]{0,15})$/)) {
				this.value = this.value.replace(/[^0-9]/g, '').substring(0,15);
			}
		});
	   
	   /*email validation*/
		function IsEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
		}
    });