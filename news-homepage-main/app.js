const body = document.querySelector("body");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const navList = document.querySelector(".nav-list");

// TODO - add functionality to open and close nav list
hamburgerMenu.addEventListener("click", () => {
  if (navList.classList.contains("hide")) {
    navList.classList.remove("hide");
    navList.classList.add("show");
    body.style.background = "rgba(0,0,0,0.5)";
  }
});

closeMenu.addEventListener("click", () => {
  if (navList.classList.contains("show")) {
    navList.classList.remove("show");
    navList.classList.add("hide");
    body.style.background = "rgba(0,0,0,0)";
  }
});
