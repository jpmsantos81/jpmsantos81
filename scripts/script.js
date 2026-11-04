import { tecnologias } from "./tecnologias.js";
import { projetosSalvos } from "./projetos.js";

const projetos = document.getElementById('projetos-lista');
const projetosScroll = document.getElementById('projetos-scroll-lateral');

pegarDestaques();
// pegarProjetos();

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
function pegarDestaques() {
    projetosSalvos.forEach(projeto => {
        if (!projeto.destaque) return;

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
        projetosScroll.appendChild(card);
    });
}

//ativa a animação de aparecer quando o item aparece na tela a primeira vez
const elementos = document.querySelectorAll("section, .projeto");

const observer = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting)
            entrada.target.classList.add("apareceu");
    });
});

elementos.forEach(elemento => {
    observer.observe(elemento);
});

//hamburger menu
const botaoMenu = document.getElementById("menu-hamburger");
const nav = document.querySelector("nav");

botaoMenu.addEventListener("click", () => {
    nav.classList.toggle("ativo");
    botaoMenu.classList.toggle("ativo");
});