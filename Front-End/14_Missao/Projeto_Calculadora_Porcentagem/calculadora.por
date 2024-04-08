programa
{
	
	funcao inicio()
	{
		real valor
		real porcentagem
		real valor_com_desconto
		real valor_com_juros

		escreva("Informe o valor: ")
		leia(valor)
		
		escreva("Informe a porcentagem: ")
		leia(porcentagem)

		valor_com_desconto = valor - (valor * porcentagem / 100)
		valor_com_juros = valor * (1 + porcentagem / 100)

		escreva(valor + " com " + porcentagem + "% de desconto é " + valor_com_desconto + "\n")
		escreva(valor + " com " + porcentagem + "% de juros é " + valor_com_juros)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 256; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */