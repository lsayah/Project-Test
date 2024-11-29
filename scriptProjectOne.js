// burger menu

const menuToggle = document.getElementById("burgerMenu");
const navbarMenu = document.querySelector(".navBarList");

menuToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});
