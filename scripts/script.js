import { tecnologias } from "./tecnologias.js";
import { projetosSalvos } from "./projetos.js";
const projetos = document.getElementById('projetos-lista');
pegarProjetos();

function pegarProjetos() {
    projetosSalvos.forEach(projeto => {
        const card = document.createElement("div");
        card.classList.add("projeto")
        card.innerHTML = `
                    <div class="projeto-conteudo">
                        <div class="projeto-img" style="background-image: url('imgs/projetos/${projeto.img}');">
                        </div>
                        <h2 class="projeto-nome">${projeto.nome}</h2>
                        <hr>
                        <div class="projeto-desc">${projeto.desc}</div>
                        <hr>
                        <div class="projeto-tecs">
                            ${projeto.tecs.map(id => {
                                const tec = tecnologias.find(t => t.id === id);
                                return `<img src="${tec.imagem}" title="${tec.nome}" alt="${tec.nome}" class="tec">`;
                            }).join('')}
                        </div>
                    </div>
                    <p>${projeto.plataformas}</p>`;
        projetos.appendChild(card);
    });
}