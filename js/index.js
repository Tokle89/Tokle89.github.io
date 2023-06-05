const hamburgerIcon = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

hamburgerIcon.addEventListener("click", () => {
  if (nav.classList.contains("show-menu")) {
    nav.classList.remove("show-menu");
  } else {
    nav.classList.add("show-menu");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show-menu");
  });
});

const introH1 = document.querySelector("h1");
const introP = document.querySelector("#intro-p");
let i = 0;
let x = 0;

const startAnimation = () => {
  animationH1();
  setTimeout(animationP, 1500);
  setTimeout(() => {
    const cta = document.querySelector("#intro-cta");
    cta.style.transition = "0.5s";
    cta.style.opacity = "100%";
  }, 5350);
};

const animationH1 = () => {
  const text = `Frontend Developer`;

  if (i < text.length) {
    introH1.innerHTML += text.charAt(i);
    i++;
    setTimeout(animationH1, 75);
  }
};

const animationP = () => {
  const text = `Hello! My Name is Fredrik Tokle. 
               Welcome to my portfolio`;
  if (x < text.length) {
    introP.innerHTML += text.charAt(x);
    x++;
    setTimeout(animationP, 40);
  }
};

setTimeout(startAnimation, 1350);
