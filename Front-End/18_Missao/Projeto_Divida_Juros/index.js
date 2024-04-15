import entradaDados from 'readline-sync';

console.log('Aplicação de Juros:\n');

//Entrada de dados
let valorDivida = entradaDados.question('Informe o valor devido: R$');
let diasAtraso = 0;
let taxaJuros = 0;

if (valorDivida > 0)
{
    diasAtraso = entradaDados.question('Informe quantod dias se passaram desde o vencimento do boleto: ')

    if (diasAtraso > 0)
    {
        if (diasAtraso <= 15)
        {
            taxaJuros = 5;
        }
        else
        {
            taxaJuros = 10;
        }

        //Cálculo dos juros
        let valorTotalComJuros = (valorDivida * (1 + (taxaJuros/100))).toFixed(2);

        //Exibição dos resultados
        console.log('Valor original da dívida: R$' + valorDivida);
        console.log('Dias atrasados: ' + diasAtraso);
        console.log('Taxa Juros: ' + taxaJuros + "%");
        console.log('Valor total com juros: R$' + valorTotalComJuros);
    }
    else
    {
        console.log('Você está em dia!');
    }
}
else
{
    console.log('O valor da dívida deve ser maior que zero!');
}

