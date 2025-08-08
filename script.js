const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você sente que escolheu seu futuro com base no que quer ou no que esperam de você?",
        alternativas: [
            {
                texto: "No que esperam de mim.",
                afirmacao: "Você começará sua jornada seguindo os caminhos que outros apontaram. Mesmo sem ter certeza, sentirá que precisa corresponder às expectativas, acreditando que isso trará segurança."
            },
            {
                texto: "No que eu realmente quero.",
                afirmacao: "Desde o início, você fará suas escolhas com base no que você acredita. Mesmo enfrentando dúvidas, terá clareza de que precisa viver algo que realmente te represente."
            }
        ]
    },
    {
        enunciado: "Se ninguém te julgasse por sua escolha de carreira, ela seria diferente?",
        alternativas: [
            {
                texto: "Sim, eu faria outra coisa.",
                afirmacao: "Com o tempo, o medo do julgamento vai pesar. Suas decisões parecerão certas aos olhos dos outros, mas algo em você começará a questionar se está mesmo no lugar certo"
            },
            {
                texto: "Não, eu faria a mesma coisa.",
                afirmacao: "Você seguirá com firmeza, mesmo sem aprovação total. Essa autenticidade atrairá experiências que te tranformarão, te deixando cada vez mais alinhado com o que é por dentro."
            }
        ]
    },
    {
        enunciado: "Você acredita que sua escolha de agora define toda a sua vida?",
        alternativas: [
            {
                texto: "Sim, sinto que é algo definitivo",
                afirmacao: "A crença de que tudo precisa dar certo de primeira vai te deixar tenso. CAda passo será calculado e a ideia de falhar poderá te impedir de algo novo."
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();