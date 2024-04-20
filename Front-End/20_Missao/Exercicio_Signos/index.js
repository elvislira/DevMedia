// import colecao_signos from "./dados.js";
// import retorna_signo from "./funcoes.js";

const dados = require('./dados/dados.js');
const funcao = require('./funcoes/funcoes.js');


let data_app = new Date();

const nome_signo = funcao.retorna_signo(dados.colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo);