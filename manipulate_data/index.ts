import getTransactions from "./getTransactions.js";
import { isTransaction } from "./userTypeGuards.js";

let transactions: any;

async function getData() {
    transactions = await getTransactions()
    renderTable()
}

function renderTable() {
    const table = document.getElementById('tabela-dados')
    const tbody = table?.querySelector('tbody');

    if (tbody?.innerHTML)
        tbody.innerHTML = ''

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

        })
    }


}

getData()