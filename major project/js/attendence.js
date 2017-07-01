$(document).ready(function(){
       $("div.row1").on("click","a#btm",function(){
        var v1;
        v1=$("div.row1 input#st_id").val();
        if(v1===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Student ID');
			$('div#popupError').popup("open");
        }
        else    {
                     $.ajax({
				url: "services/faculty-info.php",
				type: "getItem",
				data: {
					action      : 'getItem',
					name      :  v7,
					subjectid    : v2,
					month      : v3,
					course_id      :  v4,
					st_attend     :  v5,
                                   status      :  v6,
					
				},
				dataType: "json",
				success: function(result) {
					if(result.status =='1')
					{
						$('div#popupError div#successBody p.errorMessage').text(result.message);
						$('div#popupError').popup("open");
					}
					if(result.status =='0' && result.message == 'done')
					{
						location.reload();
						Lobibox.alert("success",
						{
							msg: 'Successfully Added ',
							callback: function ($this, type)
							{
								if(type=='ok')
								{
									location.reload();
								}
							}
						});
					}
					else {
						$('div#popupError div#successBody p.errorMessage').text(result.message);
						$('div#popupError').popup("open");
					}
				},
				error: function () {
					$('div#popupError div#successBody p.errorMessage').text('Error in Adding');
						$('div#popupError').popup("open");
				}
			});
        }
                     
       });

       $("div.row1").on("click","a#bt",function(){
              var v2,v3,v4,v5,v6,v7;
              v2=$("div.row1 input#subid").val();
              v3=$("div.row1 input#mon").val();
              v4=$("div.row1 input#attend").val();
              v5=$("div.row1 input#cl").val();
              v6=$("div.row1 input#st").val();
              v7=$('div.row1 input#name').val();
              if(v2===""){
                     $('div#popupError div#successBody p.errorMessage').text('Please Enter Subject Id');
			$('div#popupError').popup("open");
              }
              else if(v3===""){
                     $('div#popupError div#successBody p.errorMessage').text('Please Enter Month');
			$('div#popupError').popup("open");
              }
              else if(v4===""){
                     $('div#popupError div#successBody p.errorMessage').text('Please Enter Total class');
			$('div#popupError').popup("open");
              }
              else if(v5===""){
                     $('div#popupError div#successBody p.errorMessage').text('Please Enter Student Attendence');
                      $('div#popupError').popup("open");
              }
              else if(v6===""){
                     $('div#popupError div#successBody p.errorMessage').text('Please Enter Status');
			$('div#popupError').popup("open");
              }
              else {
                     $.ajax({
				url: "services/faculty-info.php",
				type: "POST",
				data: {
					action      : 'postItem',
					name      :  v7,
					subjectid    : v2,
					month      : v3,
					course_id      :  v4,
					st_attend     :  v5,
                                   status      :  v6,
					
				},
				dataType: "json",
				success: function(result) {
					if(result.status =='1')
					{
						$('div#popupError div#successBody p.errorMessage').text(result.message);
						$('div#popupError').popup("open");
					}
					if(result.status =='0' && result.message == 'done')
					{
						location.reload();
						Lobibox.alert("success",
						{
							msg: 'Successfully Added ',
							callback: function ($this, type)
							{
								if(type=='ok')
								{
									location.reload();
								}
							}
						});
					}
					else {
						$('div#popupError div#successBody p.errorMessage').text(result.message);
						$('div#popupError').popup("open");
					}
				},
				error: function () {
					$('div#popupError div#successBody p.errorMessage').text('Error in Adding');
						$('div#popupError').popup("open");
				}
			});
        }
        });
});
