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
        if (curso.nivel === "iniciante")
            color = "blue";
        else
            color = "red";
        document.body.innerHTML += `
      <div>
        <h2 style="color: ${color}">${curso.nome}</h2>
        <p>Aulas: ${curso.aulas}</p>
        <p>Horas: ${curso.horas}</p>
        <p>Gratuito: ${curso.gratuito ? 'Sim' : 'Não'}</p>
        <p>Tags: ${curso.tags.join(", ")}</p>
      </div>
    `;
    });
}
