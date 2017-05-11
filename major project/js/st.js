$(document).ready(function(){
    $("div.row1").on("click","a#bt",function(){
        var v1,v2,v3,v4,v5,v6,v7,v8;
        v1=$("div.row1","input#st").val();
        v2=$("div.row1","input#ad").val();
        v3=$("div.row1","input#na").val();
        v4=$("div.row1","input#co").val();
        v5=$("div.row1","div#aa").val();
        v6=$("div.row1","textarea#pw").val();
        v7=$("div.row1","input#cm").val();
        v8=$("div.row1","input#em").val();
        if(v1===""){
            alert("insert student id");
        }
        else if(v2===""){
            alert("insert admission no");
        }
        else if(v3===""){
            alert("insert name");
        }
        else if(v4===""){
            alert("insert name");
        }
        else if(v5===""){
            alert("insert name");
        }
        else if(v6===""){
            alert("insert name");
        }
        else if(v7===""){
            alert("insert name");
        }
        else if(v8===""){
            alert("insert name");
        }
        else{
            alert("submit");
            $("div.row1","input#ad").val(v1);
        }
        
        });
    });