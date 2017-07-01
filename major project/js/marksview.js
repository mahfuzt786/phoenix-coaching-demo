$(document).ready(function(){
       $("div.row1").on("click","a#btm",function(){
        var v1,v2,v3;
        v1=$("div.row1 input#st_id").val();
        v2=$("div.row1 input#subid").val();
        v3=$("div.row1 input#ts").val();
        if(v1===""){
            $('div#popupError div#successBody p.errorMessage').text('Please Enter Student ID');
			$('div#popupError').popup("open");
        }
        else if(v2===""){
                     $('div#popupError div#successBody p.errorMessage').text('Please Enter Name');
			$('div#popupError').popup("open");
              }
              else if(v3===""){
                     $('div#popupError div#successBody p.errorMessage').text('Please Enter Subject Id');
			$('div#popupError').popup("open");
              }
              else if(v4==="")
              {
                     $('div#popupError div#successBody p.errorMessage').text('Please Test Name');
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
							//msg: 'Successfully Added ',
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
					$('div#popupError div#successBody p.errorMessage').text('no data exist');
						$('div#popupError').popup("open");
				}
			});
        }
                     
       });

      
});
