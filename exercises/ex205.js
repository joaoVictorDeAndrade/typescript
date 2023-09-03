"use strict";
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === 'avancado')
            color = 'blue';
        else
            color = 'red';
        document.body.innerHTML += `
        <h1 style="color: ${color}" >${curso.nome}</h1>
    `;
    });
}
