
// Smooth scroll naar top
$(document).ready(function (){
            $("#toTop").click(function (){
                $('html, body').animate({
                    scrollTop: $("#home").offset().top
                }, 2000);
            });
        });

//Accordion
(function($) {
    
  var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });

})(jQuery);
