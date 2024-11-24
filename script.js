const menuToggle = document.GetElementById("burgerMenu");
const navbarMenu = document.querySelector(".navbarList") ; 

menuToggle.addEventListener("click", () => {  
    navbarMenu.classList.toggle("active");
});