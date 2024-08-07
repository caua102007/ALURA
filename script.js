const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Inteligencia artificial é util?",
        alternativas: [
            "sim.",
            "nao."
        ]
    },
    {
        enunciado: "voce usa a inteligancia artificial no dia a dia",
        alternativas: [
            "sim.",
            "nao."
        ]
    },
    {
        enunciado: " um exemplo muito popular de inteligencia artificial é a alexia, ja ouviu falar?",
        alternativas: [
            "sim.",
            "nao."
        ]
    },
    

];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();