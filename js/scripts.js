(function() {
    "use strict";

    // custom scrollbar

    $("html").niceScroll({styler:"fb",cursorcolor:"rgb(16, 167, 175)", cursorwidth: '6', cursorborderradius: '10px', background: '#424f63', spacebarenabled:false, cursorborder: '0',  zindex: '1000'});

    $(".scrollbar1").niceScroll({styler:"fb",cursorcolor:"rgb(16, 167, 175)", cursorwidth: '6', cursorborderradius: '0',autohidemode: 'false', background: '#F1F1F1', spacebarenabled:false, cursorborder: '0'});

	
	
    $(".scrollbar1").getNiceScroll();
    if ($('body').hasClass('scrollbar1-collapsed')) {
        $(".scrollbar1").getNiceScroll().hide();
    }

})(jQuery);

$(document).scroll(function(){
    $("#mypicture").css("display", "none");
    $("#myname").removeClass("col-md-3");
    $("#myname").addClass("col-md-6");
    $("#myname h1").css("font-size","27px");
    $("#myname p").css("display","none");
    var scrollTop = $(window).scrollTop();
    if ( scrollTop == 0 ){
       $("#mypicture").css("display", "block");
       $("#myname").removeClass("col-md-6");
       $("#myname").addClass("col-md-3");
       $("#myname h1").css("font-size","30px");
       $("#myname p").css("display","block");
    }
});
                     
     
  
    
    console.log(scrollTop);
    if (scrollTop > 20) {
        alert('Show message');
        $("#mypicture").css("display", "none");
    }