function somar(a, b, c) {
    return c ? (a + b + c) : (a + b);
}
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map(function (item) { return item.trim().toLowerCase(); });
    }
}
console.log(normalizar("   Jkljasndsasad   "));
function arredondar(valor) {
    if (typeof valor === "string") {
        return String((Math.ceil(Number(valor))));
    }
    else {
        return Math.ceil(valor);
    }
}
console.log(arredondar("3.34"));
console.log(arredondar(2.55));
