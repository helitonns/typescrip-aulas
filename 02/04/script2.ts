// function preencherDados(dados: {
//   nome:string;
//   preco:number;
//   teclado:boolean;
// }){
//   document.body.innerHTML += `
//     <div>
//       <h2>${dados.nome}</h2>
//       <p>Preço: R$ ${dados.preco}</p>
//       <p>Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
//     </div>
//   `;
// }

//para definir tipos "primitivos"
// type Produto = {
//   nome:string;
//   preco:number;
//   teclado:boolean;
// }

//será usada para definir objetos
// interface Produto2 {
//   nome:string;
//   preco:number;
//   teclado:boolean;
// }

// function preencherDados(dados: Produto){
//   document.body.innerHTML += `
//     <div>
//       <h2>${dados.nome}</h2>
//       <p>Preço: R$ ${dados.preco}</p>
//       <p>Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
//     </div>
//   `;
// }

// preencherDados({
//   nome: "Computador",
//   preco: 20000,
//   teclado: true
// });

// preencherDados({
//   nome: "Notebook",
//   preco: 1500,
//   teclado: false
// });