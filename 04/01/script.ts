

class Produto {
  readonly tipo = "produto";
  private preco: number;
  protected nome: string;

  constructor(nome: string, preco: number){
    this.nome = nome;
    this.preco = preco;
    this.tipo;
  }

  getPreco(){
    return Produto.transformarPreco(this.preco);
  }

  setPreco(preco: number){
    this.preco = preco;
  }

  static transformarPreco(preco: number){
    return `R$ ${preco}`;
  }
}