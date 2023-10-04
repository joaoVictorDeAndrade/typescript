export function parseCurrencyToNumber(amount) {
    const cleanAmount = amount.replace('R$', '').replace(/\./g, '').replace(',', '.');
    const numberAmount = parseFloat(cleanAmount);
    return !isNaN(numberAmount) ? numberAmount : null;
}
export function formatMoneyAmount(amount) {
    return `${amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
}
