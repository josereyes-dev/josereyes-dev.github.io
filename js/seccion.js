const sections = document.querySelectorAll(".resume-block");
const menuItems = document.querySelectorAll(".resume-menu li");
const header = document.querySelector(".header");

function getOffset() {
  return header.offsetHeight + 20;
}

// Scroll suave al hacer click
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const target = document.getElementById(item.dataset.target);
    const offset = getOffset();

    const top =
      target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  });
});

// Activar item del menú
window.addEventListener("scroll", () => {
  const offset = getOffset();

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const id = section.id;

    if (rect.top <= offset && rect.bottom > offset) {
      menuItems.forEach(item => {
        item.classList.toggle("active", item.dataset.target === id);
      });
    }
  });
});
