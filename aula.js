"use strict";
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return await response.json();
}
async function handleProduto() {
    const produto = await fetchProduto();
}
handleProduto();
function handleClick({ currentTarget, pageX }) {
    console.log(currentTarget);
    console.log(pageX);
}
document.documentElement.addEventListener('click', handleClick);
