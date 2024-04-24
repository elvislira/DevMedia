const sequencia = (numeroTermos) => {
    let retornoSequencia = [];

    while (retornoSequencia.length < 10) {
        let numero = Math.floor(Math.random() * 30);

        if (retornoSequencia.indexOf(numero) == -1) {
            retornoSequencia.push(numero);
        }
    }

    return retornoSequencia;
}

const retornaPerguntas = (perguntas, numeroPerguntas) => {
    let perguntasEscolhidas = [];
    let indice = 0;
    let indicesPerguntas = sequencia(numeroPerguntas);

    while (perguntasEscolhidas.length < numeroPerguntas) {
        perguntasEscolhidas.push(perguntas[indicesPerguntas[indice]]);
        indice++;
    }

    return perguntasEscolhidas;
} 

export default retornaPerguntas;