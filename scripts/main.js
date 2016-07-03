$(function() {
  $(window).scroll(function() {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop :
      document.body.scrollTop;
    if (y > 10) {
      $('#Header').addClass('on-scroll');
      return;
    }
    $('#Header').removeClass('on-scroll');
  });
});
