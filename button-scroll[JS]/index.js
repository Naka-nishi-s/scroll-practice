const jump = document.querySelector("#jump");
const jumpY = jump.getBoundingClientRect().top + window.scrollY;

const topScroll = () => {
  scrollTo(0, jumpY);
};

// const topScroll = () => {
//   window.scroll({
//     top: jumpY,
//     behavior: "smooth",
//   });
// };
