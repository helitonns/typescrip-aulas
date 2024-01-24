"use strict";
// const produto1 = ["Notebool", 1000];
// const produto2: [string, number] = ["Notebool", 1000];
// const [nome, preco] = produto2; 
// function getText(selector: string){
//   const el = document.querySelector<HTMLElement>(selector);
//   if(el){
//     return [el, el.innerText] as const;
//   }else{
//     return null;
//   }
// }
// const button = getText("button");
// console.log(button);
async function fetchVendas() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const data = await response.json();
    console.log(data);
    somarVendas(data);
}
fetchVendas();
function somarVendas(vendas) {
    let total = 0;
    for (let i = 0; i < vendas.length; i++) {
        total += vendas[i][1];
    }
    const total2 = vendas.reduce((total, venda) => {
        return total + venda[1];
    }, 0);
    console.log("TOTAL: " + total);
    console.log("TOTAL2: " + total2);
}
