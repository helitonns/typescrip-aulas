export default function stringToDate(texto) {
    const [data, horario] = texto.split(" ");
    const [dia, mes, ano] = data.split("/").map(Number);
    const [hora, minunto] = horario.split(":").map(Number);
    return new Date(ano, mes - 1, dia, hora, minunto);
}
//# sourceMappingURL=stringToDate.js.map