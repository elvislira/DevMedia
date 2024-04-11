programa
{
	
	funcao inicio()
	{
		inteiro tipoConversor
		real valorConverter
		real resultado
		cadeia mensagem

		faca
		{
			escreva("Calculadora de conversões: Escolha uma opção:\n\n")
		
			escreva("1 - Celsius para Fahrenheit\n")
			escreva("2 - Quilômetros para Milhas\n")
			escreva("3 - Sair\n\n")
			
			leia(tipoConversor)

			escolha (tipoConversor)
			{
				caso 1:
					escreva("\nInforme o valor que deseja converter: ")
					leia(valorConverter)

					resultado = (valorConverter * 1.8) + 32
					escreva(valorConverter + "°C equivale a " + resultado + "°F\n\n")
					pare
				caso 2:
					escreva("\nInforme o valor que deseja converter: ")
					leia(valorConverter)

					resultado = valorConverter * 0.621371
					escreva(valorConverter + "km equivale a " + resultado + " milhas\n\n")
					pare
				caso 3:
					escreva("Fim da aplicação!\n\n")
					pare
				caso contrario:
					escreva("Opção inválida!!!\n\n")
					pare
			}
		}
		enquanto (tipoConversor != 3)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 606; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */