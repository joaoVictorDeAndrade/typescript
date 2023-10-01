interface Transaction {
    status: string,
    id: number,
    date: string,
    name: string,
    paymentMethod: 'Cartão de Crédito' | 'Boleto',
    email: string,
    amount: string,
    newClient: number
}

interface TransactionAPI {
    Status: string,
    ID: number,
    Data: string,
    Nome: string,
    'Forma de Pagamento': 'Cartão de Crédito' | 'Boleto',
    Email: string,
    'Valor (R$)': string,
    "Cliente Novo": number
}
