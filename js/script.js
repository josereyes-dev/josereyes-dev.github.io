const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("activate");
    navMenu.classList.toggle("activate");
});

navMenu.addEventListener("click", () =>{
    hamburger.classList.remove("activate");
    navMenu.classList.remove("activate");
})

