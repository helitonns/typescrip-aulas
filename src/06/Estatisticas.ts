import countBy from "./countBy.js";


type TransavaoValor = Transacao & {valor: number};

function filtrarValor(transacao: Transacao): transacao is TransavaoValor {
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes: Transacao[];
  total;
  pagamento;
  status;
  semana;
  melhorDia: [string, number];

  constructor(transacoes: Transacao[]){
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.semana = this.setSemana();
    this.melhorDia = this.setMelhorDia();
  }

  private setTotal(){
    return this.transacoes
    .filter(filtrarValor)
    .reduce((acc, item) => {
      return acc + item.valor;
    }, 0);
  }

  private setPagamento(){
    return countBy(this.transacoes.map(({pagamento}) => pagamento));
  }
  
  private setStatus(){
    return countBy(this.transacoes.map(({status}) => status));
  }

  private setSemana(){
    const semana = {
      ["Domigo"]: 0,
      ["Segunda"]: 0,
      ["Terça"]: 0,
      ["Quarta"]: 0,
      ["Quinta"]: 0,
      ["Sexta"]: 0,
      ["Sábado"]: 0
    }

    //feito com for para ter mais formas de se fazer uma mesma coisa
    //poderia ser feito com reduce
    for(let i = 0; i < this.transacoes.length; i++){
      const day = this.transacoes[i].data.getDay();
      if(day === 0) semana["Domigo"] += 1;
      if(day === 1) semana["Segunda"] += 1;
      if(day === 2) semana["Terça"] += 1;
      if(day === 3) semana["Quarta"] += 1;
      if(day === 4) semana["Quinta"] += 1;
      if(day === 5) semana["Sexta"] += 1;
      if(day === 6) semana["Sábado"] += 1;
    }

    return semana;
  }

  private setMelhorDia(){
    return Object.entries(this.semana).sort((a, b) =>{
      return b[1] - a[1];
    })[0];
  }
}