// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
var btnMobile = document.getElementById("btn-mobile");
btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.addEventListener("pointerdown", togglemenu);
function togglemenu(event) {
    var nav = document.getElementById("nav");
    var button = event.currentTarget;
    if (button instanceof HTMLElement && nav) {
        nav.classList.toggle("active");
        var active = nav.classList.contains("active");
        if (active) {
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Abrir Menu");
        }
        else {
            button.setAttribute("aria-expanded", "true");
            button.setAttribute("aria-label", "Fechar Menu");
        }
    }
}
