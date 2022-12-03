let i = 0;

function startInterval() {
  interval = setInterval(function () {
    animate();
  }, 1200);
}

function animate() {
  $("html,body").animate({ scrollTop: i }, 1000);
  i += 30;

  let position = $(document).height() - $(window).height();
  let currentPosition = $(window).scrollTop();

  if (currentPosition >= position) {
    clearInterval(interval);
  }
}

$(function () {
  startInterval();
});
