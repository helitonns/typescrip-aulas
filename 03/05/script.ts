function somar(a: number, b: number, c?:number): number {
  return c ? (a + b + c) : (a + b);
}
//console.log(somar(3, 5, 12));

function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[]{
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }

}

console.log(normalizar("   Jkljasndsasad   "));

function arredondar(valor: string): string;
function arredondar(valor: number): number;
function arredondar(valor: string | number): string | number {
  if(typeof valor  === "string"){
    return String((Math.ceil(Number(valor))));
  }else{
    return Math.ceil(valor);
  }
}

console.log(arredondar("3.34"));
console.log(arredondar(2.55));