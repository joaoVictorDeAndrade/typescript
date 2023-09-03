"use strict";
// 1 - Selecione os elementos com a classe link.
// 2 - Crie uma função que deve ser executada para cada elemento.
// 3 - Modificar através da função o estilo da color e border.
// <a class="link" href="/">Home</a>
// <a class="link" href="/produtos">Produtos</a>
// <button class="link">Login</button>
const links = document.querySelectorAll('.link');
function changeBorderColor(element) {
    element.style.color = 'red';
    element.style.border = '2px solid red';
}
links.forEach(link => {
    if (link instanceof HTMLElement)
        changeBorderColor(link);
});
