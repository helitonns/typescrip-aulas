const links = document.querySelectorAll(".link");

function ativarElemento(elemento: HTMLElement){
  elemento.style.color = "red";
}

links.forEach((link )=> {
  if(link instanceof HTMLElement) ativarElemento(link);
});