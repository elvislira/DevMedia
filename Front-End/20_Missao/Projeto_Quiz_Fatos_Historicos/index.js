import entradaDados from 'readline-sync';
import retornaPerguntas from './servicos.js';
import perguntas from './perguntas.js';
import { exibeMensagem, exibeResultado } from './exibicao.js';


let acertos = 0;
let numeracaoPergunta = 1;
const numeroPerguntas = 10


exibeMensagem('--------QUIZ DE FATOS HISTÓRICOS--------');
exibeMensagem('\n\nSeja Bem-vindo jogador(a)!');

let nomeJogador = entradaDados.question('Digite o seu nome: ');

let perguntasEscolhidas = retornaPerguntas(perguntas, numeroPerguntas);

perguntasEscolhidas.forEach((pergunta) => {
    let questao = pergunta.pergunta;
    let respostaCerta = pergunta.resposta;
    let mensagem = '';

    console.log(`\n${numeracaoPergunta}: ${questao}`);
    numeracaoPergunta++;

    let respostaJogador = entradaDados.question('Digite a resposta (ano): ');

    if (respostaJogador === respostaCerta) {
        mensagem = 'Resposta correta!';
        acertos++;
    } else {
        mensagem = 'Resposta errada!';
    }

    exibeMensagem(mensagem);
});

exibeResultado(nomeJogador, acertos, numeroPerguntas)
