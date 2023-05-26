const hamburgerIcon = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburgerIcon.addEventListener("click", () => {
  if (nav.classList.contains("show-menu")) {
    nav.classList.remove("show-menu");
  } else {
    nav.classList.add("show-menu");
  }
});
