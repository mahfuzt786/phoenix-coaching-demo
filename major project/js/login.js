$(document).ready(function(){
    $("div.row").on("click","a#bt",function(){
        v1=$("div.row input#id").val();
        v2=$("div.row input#pw").val();
        if(v1===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter user_id');
			$('div#popupError').popup("open");
        }
        else if(v2===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter password');
			$('div#popupError').popup("open");
        }
        else{
        alert("ss,");
        }
    });
     $("div.row").on("click","a#ba",function(){
        var v3;
        v3=$("div.row input#em").val();
         if(v1===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter email');
			$('div#popupError').popup("open");
        }
        else if(!IsEmail(v8))
		{
			$('div#popupError div#successBody p.errorMessage').text('Please enter email in xxxxx@xxx.xxx format. ie john.doe@gmail.com');
			$('div#popupError').popup("open");
		}
     });
     function IsEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
		}
});