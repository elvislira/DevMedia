import entradaDados from 'readline-sync';


// Dados
// Salários
let salarios = [
    {ano: 2010, valor: 510.00},
    {ano: 2011, valor: 545.00},
    {ano: 2012, valor: 622.00},
    {ano: 2013, valor: 678.00},
    {ano: 2014, valor: 724.00},
    {ano: 2015, valor: 788.00},
    {ano: 2016, valor: 880.00},
    {ano: 2017, valor: 937.00},
    {ano: 2018, valor: 954.00},
    {ano: 2019, valor: 998.00},
    {ano: 2020, valor: 1045.00}
];

// Inflação
let inflacoes = [
    {ano: 2010, percentual: 5.91},
    {ano: 2011, percentual: 6.50},
    {ano: 2012, percentual: 5.84},
    {ano: 2013, percentual: 5.91},
    {ano: 2014, percentual: 6.41},
    {ano: 2015, percentual: 10.67},
    {ano: 2016, percentual: 6.29},
    {ano: 2017, percentual: 2.95},
    {ano: 2018, percentual: 3.75},
    {ano: 2019, percentual: 4.31},
    {ano: 2020, percentual: 4.52}
];

// Retorna uma coleção de objetos
function retornarSalarioInflacao()
{
    let salariosInflacao = [];
    let crescimento;
    
    for (let i=0; i<=10; i++)
    {
        let salarioAnterior = (i>0) ? salarios[i-1].valor : salarios[i].valor;

        let salario = salarios[i];
        let inflacao = inflacoes[i];

        crescimento = ((salario.valor - salarioAnterior) / salarioAnterior) * 100;

        let linha = `{ "ano": ${salario.ano}, "valor": ${salario.valor}, "crescimento": ${crescimento.toFixed(2)}, "percentual": ${inflacao.percentual} }`

        let objeto = JSON.parse(linha);

        salariosInflacao.push(objeto);
    }

    return salariosInflacao;
}

// Imprime um determinado caracter n vezes
function carcterNVezes(caracter, qtdVezes) 
{
    let caracteres = '';

    for (let contador=1; contador<=qtdVezes; contador++)
    {
        caracteres += caracter;
    }

    return caracteres
}

// Desenha a tabela nas três opções
function desenharTabela(cabecalho, dados) 
{
    let cabecalhoArray = cabecalho.split(' ');
    const larguraTabela = (cabecalhoArray.length>2) ? 80 : 60;
    let tamanhoCabecalho = cabecalho.length - (cabecalhoArray.length - 1);
    let espacoDireita = ((larguraTabela - tamanhoCabecalho) / cabecalhoArray.length).toFixed(0);

    let cabecalhoTabela = '';

    for (let tit of cabecalhoArray)
    {
        cabecalhoTabela += `${tit.padEnd(espacoDireita, ' ')}`;
    }

    console.log(carcterNVezes('=', cabecalhoTabela.length));
    console.log(cabecalhoTabela);
    console.log(carcterNVezes('=', cabecalhoTabela.length));

    for (let linha of dados)
    {
        let linhaTabela = '';
    
        for (let campo in linha)
        {
            if (campo == 'valor')
            {
                linhaTabela += `R$ ${linha[campo].toFixed(2)}`
                    .replace('.', ',')
                    .padEnd(espacoDireita, ' ');
            } else if (campo == 'percentual' || campo == 'crescimento')
            {
                linhaTabela += `${linha[campo].toFixed(2)}%`
                    .replace('.', ',')
                    .padEnd(espacoDireita, ' ');
            }
            else
            {
                linhaTabela += `${linha[campo]}`.padEnd(espacoDireita, ' ');
            }
        }
        console.log(linhaTabela);
        console.log(carcterNVezes('-', cabecalhoTabela.length));
    }

}

// Lista os salários
function listarSalarios() 
{
    console.log('\nSalário Mínimo - 2010 à 2020');
    desenharTabela('Ano Salario', salarios);
}

// Lista as inflações
function listarInflacao() 
{
    console.log('\nInflação (IPCA) - 2010 à 2020');
    desenharTabela('Ano Percentual', inflacoes);
}

// Lista a comparação entre Salário e Inflação
function listarComparacaoSalarioInflacao()
{
    console.log('\nSalário x Inflação (IPCA) - 2010 à 2020');
    let dadosSalarioInflacao = retornarSalarioInflacao();
    desenharTabela('Ano Salário Crescimento Inflação', dadosSalarioInflacao);
}


// Menu de opções
console.log('\nEscolha uma das alternativas:\n');

console.log('1 - Listar os salários mínimos de 2010 à 2020');
console.log('2 - Listar o índice IPCA de 2010 à 2020');
console.log('3 - Comparação entre o percentual de aumento salarial e o IPCA');

let opcao = Number(entradaDados.question('\nDigite o numero da sua escolha: '));

// Seleciona a escolha do usuário
switch (opcao)
{
    case 1:
        listarSalarios();
        break;
    case 2:
        listarInflacao();
        break;
    case 3:
        listarComparacaoSalarioInflacao();
        break;
    default:
        console.log('\nOpção inválida!');
        break;
}

