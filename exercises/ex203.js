"use strict";
function preencherDados(dados) {
    document.body.innerHTML += `
        <div>
            <h1>${dados.nome}</h1>
            <p>R$ ${dados.preco}</p>
            <p>Tem teclado? ${dados.teclado ? 'sim' : 'nao'} </p>
        </div>
    `;
}
preencherDados({
    nome: 'Computador',
    preco: 2000,
    teclado: true
});
preencherDados({
    nome: 'Notebook',
    preco: 2200,
    teclado: false
});
