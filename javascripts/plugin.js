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
        
}
)























    
  
    
