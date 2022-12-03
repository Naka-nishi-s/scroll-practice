$(function () {
  $("#scroll").on("click", function () {
    const position = $("._3").offset().top;
    $(window).scrollTop(position);
  });
});
