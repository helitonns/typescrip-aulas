var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.tipo = "produto";
        this.nome = nome;
        this.preco = preco;
        this.tipo;
    }
    Produto.prototype.getPreco = function () {
        return Produto.transformarPreco(this.preco);
    };
    Produto.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    Produto.transformarPreco = function (preco) {
        return "R$ ".concat(preco);
    };
    return Produto;
}());
