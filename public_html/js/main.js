// Scrollspy Detection
  $(document).ready(function(){
      $('body').scrollspy({target: ".navbar", offset: 75});
  });

// Smooth Scrolling
  $(function() {
      $('a.nav-link').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
  });

// Mobile Menu Retracts After Clicking Link
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});