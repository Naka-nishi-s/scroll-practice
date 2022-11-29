$(function () {
  $(".ad").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".ad").fadeIn();
    } else {
      $(".ad").fadeOut();
    }
  });
});
