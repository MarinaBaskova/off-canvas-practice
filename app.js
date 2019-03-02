const hamburger = document.querySelector(".hamburger");

const nav = document.querySelector(".nav");

const content = document.querySelector(".content");
const hamburgerBars = Array.from(document.querySelectorAll(".hamburger >span"));

console.log(hamburgerBars);

function toggleNav() {
  hamburger.addEventListener("click", toggle);
}

function animateHamburgers() {
  for (let bar of hamburgerBars) {
    if (bar.classList.contains("second-bar")) {
      bar.style.transition = "0.1s";
    }
    bar.classList.toggle("change");
    console.log(bar);
  }
}

function toggle() {
  nav.classList.toggle("open");
  content.classList.toggle("shift");
  animateHamburgers();
}
toggleNav();
