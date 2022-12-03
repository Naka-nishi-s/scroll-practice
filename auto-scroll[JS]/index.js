let i = 0;

let start = function () {
  scrollTo(0, i);

  i = i + 5;

  if (
    window.scrollY >=
    document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  ) {
  } else {
    window.requestAnimationFrame(start);
  }
};

window.setTimeout(start, 1000);
