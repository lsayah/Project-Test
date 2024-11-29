// burger menu

const menuToggle = document.getElementById("burgerMenu");
const navbarMenu = document.querySelector(".navBarList");

menuToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// animation timeline

const detailsHover = document.querySelector(".timelineContainer");

detailsHover.addEventListener("mouseover", () => {
  detailsHover.style.height = "100%";
  detailsHover.style.width = "80%";
});

detailsHover.addEventListener("mouseout", () => {
  detailsHover.style.height = "40%";
  detailsHover.style.width = "40%";
});
