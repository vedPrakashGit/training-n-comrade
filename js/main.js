$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 115){
            $('.tnc-logo').addClass("less-width");
            $('#backToTopBtn').show();
        }
        else{
            $('.tnc-logo').removeClass("less-width");
            $('#backToTopBtn').hide();
          }
    });

    $("#backToTopBtn").on("click", function(){
        $("html, body").animate({ scrollTop: 0 });
        return false;
      });
});

