export function formatAmount(amount) {
    const cleanAmount = amount.replace('R$', '').replace(/\./g, '').replace(',', '.');
    const numberAmount = parseFloat(cleanAmount);
    return !isNaN(numberAmount) ? numberAmount : null;
}
