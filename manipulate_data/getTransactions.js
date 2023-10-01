function normalizeTransaction(transaction) {
    return {
        status: transaction.Status,
        id: transaction.ID,
        date: transaction.Data,
        name: transaction.Nome,
        paymentMethod: transaction["Forma de Pagamento"],
        email: transaction.Email,
        amount: transaction["Valor (R$)"],
        newClient: transaction["Cliente Novo"]
    };
}
export default async function getTransactions() {
    try {
        const response = await fetch(`https://api.origamid.dev/json/transacoes.json`);
        const json = await response.json();
        const normalizedTransactions = json.map(item => normalizeTransaction(item));
        return normalizedTransactions;
    }
    catch (error) {
        console.error(error);
    }
}
