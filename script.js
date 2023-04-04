const mobileMenu = document.querySelector(".button");
const menuList = document.querySelector(".menu-list");
const darkMode = document.querySelector(".dark-layer");
const menuElements = document.querySelector(".menu-list");
const closeIcon = document.querySelector(".menu-list img");

mobileMenu.addEventListener("click", revealMenu);

function revealMenu() {
  darkMode.classList.toggle("active");
  menuElements.style.display = "block";
  closeIcon.addEventListener("click", closeMenu);
}

function closeMenu() {
  darkMode.classList.toggle("active");
  menuElements.style.display = "none";
  closeIcon.removeEventListener("click", closeMenu);
}
