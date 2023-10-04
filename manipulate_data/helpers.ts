export function parseCurrencyToNumber(amount: string) {
    const cleanAmount = amount.replace('R$', '').replace(/\./g, '').replace(',', '.')


    const numberAmount = parseFloat(cleanAmount)

    return !isNaN(numberAmount) ? numberAmount : null

}

export function formatMoneyAmount(amount: number) {
    return `${amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
}