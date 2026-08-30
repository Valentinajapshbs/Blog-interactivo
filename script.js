script.js
// =========================
// MODO OSCURO
// =========================

const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", () => {

    document.body.classList.toggle("oscuro");

    const icono = modoBtn.querySelector("i");

    if (document.body.classList.contains("oscuro")) {

        icono.classList.remove("fa-moon");
        icono.classList.add("fa-sun");

    } else {

        icono.classList.remove("fa-sun");
        icono.classList.add("fa-moon");

    }

});


// =========================
// ANIMACIÓN AL HACER SCROLL
// =========================

const elementos = document.querySelectorAll(
    ".dato-card, .infografia, .texto-problema, .variables-card, .grafica-container, .funcion-card, .info-card, .resultado"
);

const observer = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("mostrar");

        }

    });

}, {
    threshold: 0.15
});


elementos.forEach((elemento) => {

    elemento.classList.add("oculto");

    observer.observe(elemento);

});