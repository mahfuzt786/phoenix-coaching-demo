$(document).ready(function(){
         $("div.abcd").on("click","h1#ab",function(){
                $("div.abcd h1#ab").text("adbclili");
            });
         $("div.abc").on("click","h1#ba",function(){
            $("div.abc h1#ba").text("something missing");
             $("div.abcd input#bs").val("prayag");
            
         });
          $("div.abcd").on("click","input#bs",function(){
            alert("jkl");
          $("div.abcd input#bs").val("priyangshuaa");
          
          });
           $("div.ef").on("click","a#ty",function(){
           var sum,v1,v2;
           v1=$("div.ef input#a1").val();
           v2=$("div.ef input#a2").val();
           sum=Number(v1)+Number(v2);
           $("div.ef input#a3").val(sum);
            
           });
});