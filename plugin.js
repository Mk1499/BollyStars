/*global $ , document , window , console */

$(window).scroll(function() {
    
      console.log($(this).scrollTop());
    
})

$(document).ready(
function() {
    
    $("#bt").click( function(){
$("body").animate({scrollTop:$("body").height()},1500) ;
}



)

    
    
    
    $("#btn-up").click(
    function(){
        $("body").animate({scrollTop:0},1000);
    }
    )
    
    

    $("#selected_one").change( function(){
        var src = $("#play").attr("src") ,
       src_last = src.substr(src.lastIndexOf('/')+1),
            dist = $("#play").attr("src").replace(src_last,$("#selected_one").val());
        
        $("#play").attr("src",dist);   
        
    })
    
    $("#selected_two").change( function(){
        var src = $("#play2").attr("src") ,
       src_last = src.substr(src.lastIndexOf('/')+1),
            dist = $("#play2").attr("src").replace(src_last,$("#selected_two").val());
        
        $("#play2").attr("src",dist);   
        
    })
    
    $("#katrina").click(function(){
        
        $("#katrina-show").toggle("slow", function(){
            $("#srk-show").hide("slow");
             $("#HRX-show").hide("slow");
             $("#salman-show").hide("slow");
             $("#aamer-show").hide("slow");
             $("#depika-show").hide("slow");
        });
         
    }); 
    
     $("#srk").click(function(){
        
         $("#srk-show").toggle("slow", function(){
            $("#katrina-show").hide("slow");
             $("#HRX-show").hide("slow");
             $("#salman-show").hide("slow");
             $("#aamer-show").hide("slow");
             $("#depika-show").hide("slow");
        });
    }); 
    
     $("#HRX").click(function(){
        
         $("#HRX-show").toggle("slow", function(){
            $("#srk-show").hide("slow");
             $("#katrina-show").hide("slow");
             $("#salman-show").hide("slow");
             $("#aamer-show").hide("slow");
             $("#depika-show").hide("slow");
        });
    }); 
    
     $("#salman").click(function(){
        
         $("#salman-show").toggle("slow", function(){
            $("#srk-show").hide("slow");
             $("#HRX-show").hide("slow");
             $("#katrina-show").hide("slow");
             $("#aamer-show").hide("slow");
             $("#depika-show").hide("slow");
        });
    }); 
    
     $("#aamer").click(function(){
        
         $("#aamer-show").toggle("slow", function(){
            $("#srk-show").hide("slow");
             $("#HRX-show").hide("slow");
             $("#salman-show").hide("slow");
             $("#katrina-show").hide("slow");
             $("#depika-show").hide("slow");
        });
    }); 
    
     $("#depika").click(function(){
        
         $("#depika-show").toggle("slow", function(){
            $("#srk-show").hide("slow");
             $("#HRX-show").hide("slow");
             $("#salman-show").hide("slow");
             $("#aamer-show").hide("slow");
             $("#katrina-show").hide("slow");
        });
    }); 
    
    
    
    $(document).keyup(function(e){
        if(e.keyCode ===27){
           $("#katrina-show").hide("slow");
             $("#srk-show").hide("slow");
             $("#HRX-show").hide("slow");
             $("#salman-show").hide("slow");
             $("#aamer-show").hide("slow");
             $("#depika-show").hide("slow");
        }
    }) ;
    
    $(".back").click(function(){
        
         $("#katrina-show").hide("slow");
             $("#srk-show").hide("slow");
             $("#HRX-show").hide("slow");
             $("#salman-show").hide("slow");
             $("#aamer-show").hide("slow");
             $("#depika-show").hide("slow");
    })
    
    
});




















    
  
    
