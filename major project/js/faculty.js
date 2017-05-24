$(document).ready(function(){
    $("div.row1").on("click","a#bt",function(){
        var v1,v2,v3,v4,v5,v6,v7,v8;
        v1=$("div.row1 input#p").val();
        v2=$("div.row1 input#st").val();
        v3=$("div.row1 input#qua").val();
        v4=$("div.row1 input#cid").val();
        v5=$("div.row1 input#em").val();
        v6=$("div.row1 input#ph").val();
        v7=$("div.row1 input#pass").val();
        v8=$("div.row1 textarea#ad").val();
        if(v1===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Faculty ID');
			$('div#popupError').popup("open");
        }
        else if(v2===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Name');
			$('div#popupError').popup("open");
        }
        else if(v3===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Qualification');
			$('div#popupError').popup("open");
        }
        else if(v4===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Course ID');
			$('div#popupError').popup("open");
        }
        else if(v5===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Email');
			$('div#popupError').popup("open");
        }
        else if(v6===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Phone number');
			$('div#popupError').popup("open");
        }
        else if(v7===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Password');
			$('div#popupError').popup("open");
        }
        else if(v8===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Address');
			$('div#popupError').popup("open");
        }
		else if(!IsEmail(v5))
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
		function IsEmail(em) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(em);
		}
    });