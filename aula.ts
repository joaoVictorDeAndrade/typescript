interface Produto {
    nome: string;
    preco: number;
}

async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return await response.json() as Produto
}

async function handleProduto() {
    const produto = await fetchProduto()
}

handleProduto()


function handleClick({ currentTarget, pageX }: MouseEvent) {
    console.log(currentTarget)
    console.log(pageX)

}

document.documentElement.addEventListener('click', handleClick)