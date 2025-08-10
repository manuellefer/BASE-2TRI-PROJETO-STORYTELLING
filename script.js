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
                afirmacao: "A crença de que tudo precisa dar certo de primeira vai te deixar tenso. Cada passo será calculado e a ideia de falhar poderá te impedir de algo novo."
            },
            {
                texto: "Não, acho que posso mudar no futuro.",
                afirmacao: "Por enxergar o futuro como aberto, você se permitirá errar, testar e crescer. Isso vai aliviar o peso das decisões e te trazer liberdade para explorar o inesperado."
            }
        ]
    },
    {
        enunciado: "Você já sentiu vergonha de não saber o que fazer depois do ensino médio?",
        alternativas: [
            {
                texto: "Sim, como se isso fosse um erro.",
                afirmacao: "Em alguns momentos, você vai esconder suas incertezas, tentando parecer forte. Mas por dentro, o receio de errar poderá atrasar suas descobertas mais sinceras."
            },
            {
                texto: "Não, considero normal ter dúvidas.",
                afirmacao: "Ao acolher suas dúvidas sem medo, você criará um caminho mais verdadeiro. Isso te fará crescer com equilíbrio e lidar melhor com os altos e baixos que virão."
            }
        ]
    },
    {
        enunciado: "Você acha que a pressa em escolher impede descobertas sobre si mesmo(a)?",
        alternativas: [
            {
                texto: "Sim, isso me impede de me conhecer melhor",
                afirmacao: "A pressa para definir tudo vai te afastar de si. Mesmo alcançando metas, sentirá que falta algo — até perceber que precisa se reconectar com seus próprios desejos."
            },
            {
                texto: "Não, me ajuda a amadurecer mais rápido.",
                afirmacao: "Mesmo com prazos apertados, você vai se manter firme em quem é. Essa base interior te dará direção, mesmo quando os caminhos forem incertos."
            }
        ]
    },
    {
        enunciado: "Se pudesse pausar tudo por um ano, sem julgamentos, o que faria?",
        alternativas: [
            {
                texto: "Me conhecer melhor e explorar possibilidades.",
                afirmacao: "Em algum ponto, você poderá parar. Um tempo de pausa trará novos entendimentos, e você começará a ver que o futuro não precisa ser uma corrida."
            },
            {
                texto: "Me adiantaria nos estudos ou no trabalho.",
                afirmacao: "Você continuará avançando com foco total. O progresso será visível, e você conquistará muito em pouco tempo embora, vez ou outra, se questione sobre o que ficou para trás."
            }
        ]
    },
    {
        enunciado: "Você sente que suas escolhas estão sendo influenciadas pelo medo do fracasso?",
        alternativas: [
            {
                texto: "Sim, tenho medo de não dar certo.",
                afirmacao: "O medo de errar ainda vai te acompanhar, e algumas oportunidades poderão passar. Mas em silêncio, você começará a perceber que a verdadeira coragem nasce justamente quando há medo."
            },
            {
                texto: "Não, estou mais motivado(a) do que com medo.",
                afirmacao: "Sua determinação se fortalecerá. Mesmo diante dos desafios, você seguirá com ousadia, e isso abrirá portas que outros nem ousaram tentar."
            }
        ]
    },
    {
        enunciado: "O que pesa mais para você na hora de decidir seu caminho?",
        alternativas: [
            {
                texto: "Estabilidade financeira.",
                afirmacao: "A busca por estabilidade te dará conforto, mas exigirá renúncias. Em alguns momentos, você vai se perguntar se a segurança vale mais que os sonhos deixados de lado."
            },
            {
                texto: "Realização pessoal.",
                afirmacao: "Seu desejo de viver com propósito te levará por caminhos menos seguros, mas muito mais vivos. Você entenderá que valer a pena nem sempre significa ser fácil."
            }
        ]
    },
    {
        enunciado: "Você já pensou que talvez o caminho certo nem exista?",
        alternativas: [
            {
                texto: "Sim, acho que cada um cria o seu.",
                afirmacao: "Ao perceber que não existe um só caminho, você será mais leve com suas escolhas. Mudará quando precisar e encontrará valor nas experiências inesperadas."
            },
            {
                texto: "Não, acredito que existe um caminho ideal.",
                afirmacao: "Você seguirá firme no seu plano. Isso te trará foco e conquistas consistentes, desde que saiba aceitar desvios sem achar que falhou."
            }
        ]
    },
    {
        enunciado: "O que mais te atrapalha em pensar no futuro?",
        alternativas: [
            {
                texto: "As expectativas dos outros.",
                afirmacao: "No fim, você entenderá que viver para agradar não preenche. Quando decidir se colocar em primeiro lugar, seu futuro começará a fazer mais sentido."
            },
            {
                texto: "As minhas próprias inseguranças.",
                afirmacao: "Ao enfrentar seus próprios medos, você vai descobrir uma força que antes não via. E é essa força que te levará, com autenticidade, ao futuro que é só seu."
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