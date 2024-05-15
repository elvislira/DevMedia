import jogosExclusivos from "@/dados";

const retornarJogos = () => {
    return jogosExclusivos;
}

const buscarJogo = (textoDigitado) => {
    return jogosExclusivos.filter(
        jogo => jogo.nome.toLowerCase().includes(textoDigitado.toLowerCase()) || 
            jogo.plataforma.toLowerCase().includes(textoDigitado.toLowerCase())
    );
}

const filtrarPorPlataforma = (plataforma) => {
    return jogosExclusivos.filter(
        jogo => jogo.plataforma === plataforma
    );
}

export {retornarJogos, buscarJogo, filtrarPorPlataforma};