// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

const btnMobile = document.getElementById("btn-mobile");

btnMobile?.addEventListener("pointerdown", togglemenu);

function togglemenu(event: PointerEvent) {
  const nav = document.getElementById("nav");
  const button = event.currentTarget;

  if (button instanceof HTMLElement && nav) {
    nav.classList.toggle("active");

    const active = nav.classList.contains("active");

    if (active) {
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Abrir Menu");
    } else {
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Fechar Menu");
    }
  }
}
