const links = document.querySelectorAll('a[data-scroll]');

// Agrega un controlador de eventos de clic a cada enlace
links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // Evita el comportamiento predeterminado del enlace

      // Obtiene la sección a la que se está desplazando
      const target = document.querySelector(link.getAttribute('href'));

      // Obtiene la posición de desplazamiento de la sección
      const topOffset = target.offsetTop;

      // Animación de desplazamiento suave
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    });
  });



