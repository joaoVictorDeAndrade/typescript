export function formatAmount(amount: string) {
    const cleanAmount = amount.replace('R$', '').replace(/\./g, '').replace(',', '.')


    const numberAmount = parseFloat(cleanAmount)

    return !isNaN(numberAmount) ? numberAmount : null

}