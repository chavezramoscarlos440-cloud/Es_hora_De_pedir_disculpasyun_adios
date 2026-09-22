const btnAbrir = document.getElementById("btnAbrir");

const inicio = document.getElementById("inicio");

const cartaSeccion =
document.getElementById("cartaSeccion");

const btnMusica =
document.getElementById("btnMusica");

const musica =
document.getElementById("musica");

/* =================================
ABRIR CARTA
================================= */

btnAbrir.addEventListener("click", () => {

inicio.style.opacity = "0";

inicio.style.transform =
    "translateY(-30px)";

setTimeout(() => {

    inicio.style.display = "none";

    cartaSeccion.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}, 700);


/* Intentar iniciar música */

if (musica) {

    musica.volume = 0.25;

    musica.play().catch(() => {

        console.log(
            "La música necesita interacción del usuario."
        );

    });

}

});

/* =================================
BOTÓN DE MÚSICA
================================= */

let reproduciendo = false;

btnMusica.addEventListener("click", () => {

if (!musica) {
    return;
}


if (reproduciendo) {

    musica.pause();

    btnMusica.textContent = "🎵";

    reproduciendo = false;

} else {

    musica.volume = 0.25;

    musica.play();

    btnMusica.textContent = "🔊";

    reproduciendo = true;

}

});