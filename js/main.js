(function($) {
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('.scrollToTop').fadeIn();
      } else {
          $('.scrollToTop').fadeOut();
      }
    });

    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},"slow");
        return false;
    });

    $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
        window.location.hash = hash;
      });
    }
  });

})( jQuery );