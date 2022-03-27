var downscroll = document.querySelector("#downscroll");
var body = document.querySelector("body");

downscroll.addEventListener("click", () => {
  body.style.overflow = "scroll";
});
