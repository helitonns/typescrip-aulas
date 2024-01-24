"use strict";
class Produto {
    tipo = "produto";
    preco;
    nome;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        this.tipo;
    }
    getPreco() {
        return Produto.transformarPreco(this.preco);
    }
    setPreco(preco) {
        this.preco = preco;
    }
    static transformarPreco(preco) {
        return `R$ ${preco}`;
    }
}
