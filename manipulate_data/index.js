import getTransactions from "./getTransactions.js";
import { formatMoneyAmount, parseCurrencyToNumber } from "./helpers.js";
import { isTransaction } from "./userTypeGuards.js";
let transactions;
async function getData() {
    transactions = await getTransactions();
    renderTable();
    calculateTotal();
    amountCreditCard();
}
function renderTable() {
    const table = document.getElementById('tabela-dados');
    const tbody = table?.querySelector('tbody');
    if (tbody?.innerHTML)
        tbody.innerHTML = '';
    if (transactions instanceof Array) {
        transactions.forEach(item => {
            const row = document.createElement('tr');
            const statusCell = document.createElement('td');
            const nameCell = document.createElement('td');
            const paymentMethodCell = document.createElement('td');
            const emailCell = document.createElement('td');
            const amountCell = document.createElement('td');
            if (isTransaction(item)) {
                nameCell.textContent = item.name;
                emailCell.textContent = item.email;
                amountCell.textContent = 'R$ ' + item.amount;
                paymentMethodCell.textContent = item.paymentMethod;
                statusCell.textContent = item.status;
                row.appendChild(nameCell);
                row.appendChild(emailCell);
                row.appendChild(amountCell);
                row.appendChild(paymentMethodCell);
                row.appendChild(statusCell);
                tbody?.appendChild(row);
            }
        });
    }
}
function calculateTotal() {
    const totalAmount = document.querySelector('#totalAmount');
    if (transactions instanceof Array) {
        let amount = 0;
        transactions.forEach(item => {
            if (isTransaction(item)) {
                amount += parseCurrencyToNumber(item.amount) || 0;
            }
        });
        if (totalAmount) {
            totalAmount.innerHTML = `${formatMoneyAmount(amount)}`;
        }
    }
}
function amountCreditCard() {
    const creditCard = document.getElementById('creditCard');
    if (transactions instanceof Array) {
        const creditCardArray = transactions.filter(item => {
            if (isTransaction(item)) {
                return item.paymentMethod === 'Cartão de Crédito';
            }
        });
        if (creditCard)
            creditCard.innerText = String(creditCardArray.length);
    }
}
getData();
