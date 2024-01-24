/**
 * Recebe string "1.200,00" retorna numbre 1200.00
 */
export default function moedaParaNumero(moeda: string): number | null {
  const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
  return isNaN(numero) ? null : numero;
}