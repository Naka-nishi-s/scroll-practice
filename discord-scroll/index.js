let i = 0;

const go = () => {
  let a = document.getElementById("1");
  let id;

  a.scrollTo(0, i);
  i += 0.1;

  if (i < 671) {
    id = requestAnimationFrame(function () {
      requestAnimationFrame(go);
    });
  } else {
    cancelAnimationFrame(id);
  }
};

// ダメな例
// let i = 0;

// const go = () => {
//   let a = document.getElementById("1");
//   let id;

//   a.scrollTo(0, i);

//   id = window.requestAnimationFrame(go);

//   if (i < 1000) {
//     i += 5;
//   } else {
//     window.cancelAnimationFrame(id);
//   }
// };
