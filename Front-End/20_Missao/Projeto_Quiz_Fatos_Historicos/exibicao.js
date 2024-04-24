const exibeMensagem = (mensagem) => console.log(mensagem);

const exibeResultado = (nomeJogador, acertos, numeroPerguntas) => {
    exibeMensagem(`\nJogador(a): ${nomeJogador}`);
    exibeMensagem(`Pontuação final: ${acertos}/${numeroPerguntas}`);

    let mensagemMotivacional;

    switch (acertos) {
        case 0:
        case 1:
        case 2:
        case 3:
            mensagemMotivacional ='OH NÃO! Tente mais uma vez.';
            break;
        case 4:
        case 5:
        case 6:
            mensagemMotivacional = 'BOM TRABALHO! Pratique um pouco mais.';
            break;
        case 7:
        case 8:
        case 9:
            mensagemMotivacional = 'MUITO BOM! Você acertou a maioria.';
            break;
        case 10:
            mensagemMotivacional = 'EXCELENTE! Você é um verdadeiro expert.';
            break;
    }

    exibeMensagem(mensagemMotivacional);
}

export  { exibeMensagem, exibeResultado };