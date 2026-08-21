const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      "Isso é assustador!",
      "Isso é maravilhoso!"
    ],
  },
  {
    enunciado:
      "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
      "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
    ],
  },
  {
    enunciado:
      "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas: [
      "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
      "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
    ],
  },
  {
    enunciado:
      "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
      "Criar uma imagem utilizando uma plataforma de design como o Paint.",
      "Criar uma imagem utilizando um gerador de imagem de IA.",
    ],
  },
  {
    enunciado:
      "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
      "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
      "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
    ],
  },
];

let atual = 0;
let respostas = [];

function mostraPergunta() {
  const perguntaAtual = perguntas[atual];

  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.innerHTML = "";

  perguntaAtual.alternativas.forEach((alternativa, indice) => {
    const botao = document.createElement("button");

    botao.textContent = alternativa;

    botao.addEventListener("click", () => {
      respostas.push(indice);

      atual++;

      if (atual < perguntas.length) {
        mostraPergunta();
      } else {
        mostraResultado();
      }
    });

    caixaAlternativas.appendChild(botao);
  });
}

function mostraResultado() {
  caixaPerguntas.textContent = "";
  caixaAlternativas.innerHTML = "";

  const respostasIA = respostas.filter((resposta) => resposta === 1).length;

  if (respostasIA >= 3) {
    textoResultado.textContent =
      "Você demonstra bastante interesse e confiança no uso da Inteligência Artificial. Para você, a IA pode ser uma ferramenta importante para aprender, criar e resolver problemas, desde que seja utilizada com responsabilidade.";
  } else if (respostasIA >= 2) {
    textoResultado.textContent =
      "Você tem uma visão equilibrada sobre a Inteligência Artificial. Reconhece suas possibilidades, mas também entende que é importante ter cuidado, revisar informações e manter o pensamento crítico.";
  } else {
    textoResultado.textContent =
      "Você demonstra uma postura mais cuidadosa em relação à Inteligência Artificial. Para você, é importante compreender os riscos e limites dessa tecnologia antes de utilizá-la.";
  }

  caixaResultado.style.display = "block";
}

mostraPergunta();
