const btnMenu = document.querySelector("#btnMenu");
const main_menu = document.querySelector("#main_menu");
btnMenu.addEventListener("click", function(){
    main_menu.classList.toggle("mostrar");
});