"use strict";
const links = document.querySelectorAll(".link");
function ativarElemento(elemento) {
    elemento.style.color = "red";
}
links.forEach((link) => {
    if (link instanceof HTMLElement)
        ativarElemento(link);
});
