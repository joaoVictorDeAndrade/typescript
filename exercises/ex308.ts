// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

interface Aula {
    nome: string;
    horas: number;
    tags: string[];
}

async function fetchData() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();

    handleAulas(json)
}

function isAula(value: unknown): value is Aula {
    if (value && typeof value === 'object' && 'nome' in value && 'horas' in value && 'tags' in value) return true

    return false
}

function handleAulas(value: unknown) {
    if (value instanceof Array) {
        value.forEach(item => {
            if (isAula(item)) document.body.innerHTML += `<h1>${item.nome}</h1>`
        })
    }

}

fetchData()