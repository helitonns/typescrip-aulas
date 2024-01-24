"use strict";
// type Produto = {
//   preco: number;
// };
// type Carro = {
//   rodas: number;
//   portas: number;
// };
// function handleProdutoCarro(dados: Carro & Produto) {
//   dados.rodas;
//   dados.portas;
//   dados.preco;
// }
// handleProdutoCarro({
//   preco: 20000,
//   rodas: 4,
//   portas: 5,
// });
// // Com Type
// type TipoCarro = {
//   rodas: number;
//   portas: number;
// };
// type TipoCarroComPreco = TipoCarro & {
//   preco: number;
// };
// const dado2: TipoCarroComPreco = {
//   preco: 20000,
//   rodas: 4,
//   portas: 5,
// };
// // Com Interface
// interface InterfaceCarro {
//   rodas: number;
//   portas: number;
// }
// interface InterfaceCarro {
//   preco: number;
// }
// const dado1: InterfaceCarro = {
//   preco: 20000,
//   rodas: 4,
//   portas: 5,
// };
