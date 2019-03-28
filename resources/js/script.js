$(document).ready(function() {

  /* sticky nav */
  $('.js--section-features').waypoint(function(direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px'
  });

    /* scroll on button */
    $('.js--scroll-to-learn').click(function() {
      $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });

    $('.js--scroll-to-plan').click(function() {
      $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    });

});