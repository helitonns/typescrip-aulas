var links = document.querySelectorAll(".link");
function ativarElemento(elemento) {
    elemento.style.color = "red";
}
links.forEach(function (link) {
    if (link instanceof HTMLElement)
        ativarElemento(link);
});
