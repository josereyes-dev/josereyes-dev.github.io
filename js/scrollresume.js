const resumen = document.getElementById('.container-resume');

const menuresumen = () => {
    console.log('Ejecuta')
}

const observer = new IntersectionObserver(menuresumen,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

observer.observe(resumen);