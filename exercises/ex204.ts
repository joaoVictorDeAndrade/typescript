interface Notebook {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Empresa;
    empresaMontadora: Empresa
}

interface Empresa {
    nome: string;
    fundacao: number;
    pais: string;
}


async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}

fetchProduct();

function showProduct(data: Notebook) {
    document.body.innerHTML = `
      <div>
        <h2>${data.descricao}</h2>
      </div>
    `;
}

fetchProduct()
