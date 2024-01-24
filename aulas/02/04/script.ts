async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

interface Empresa {
  fundacao: number;
    nome: string;
    pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidente: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Product) {
  document.body.innerHTML = `
    <div>
      <h2>Produto: ${data.nome}</h2>
      <p>Preço: R$ ${data.preco}</p>
      <p>Descrição: ${data.descricao}</p>
      <p>Possui garantia: ${data.garantia ? 'Sim' : 'Não'}</p>
      <div>
        <h3>Empresa fabricante: ${data.empresaFabricante.nome}</h3>
        <p>Ano de fundação: ${data.empresaFabricante.fundacao}</p>
        <p>País: ${data.empresaFabricante.pais}</p>
      </div>
      <div>
        <h3>Empresa montadora: ${data.empresaMontadora.nome}</h3>
        <p>Ano de fundação: ${data.empresaMontadora.fundacao}</p>
        <p>País: ${data.empresaMontadora.pais}</p>
      </div>
    </div>
  `;
}


