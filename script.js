const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("activate");
    navMenu.classList.toggle("activate");
})

document.querySelector(".nav-link").forEeach(n => n.addEventListener("clic", () =>{
    hamburger.classList.remove("activate");
    navMenu.classList.remove("activate");

}))