programa
{
	
	funcao inicio()
	{
		cadeia mensagem
		inteiro dia_aniversario
		
		escreva("------------FRASE DA SORTE DO ANIVERSÁRIO------------\n\n")
		escreva("SEJA BEM-VINDO!! LEIA A SORTE DO SEU ANIVERSÁRIO!!\n\n")
		escreva("Informe o dia do seu aniversário: ")

		leia(dia_aniversario)

		escolha (dia_aniversario)
		{
			caso 1:
				mensagem = "A vida trará coisas boas se você tiver paciência."
				pare
			caso 2:
				mensagem = "Demonstre amor e alegria em todas as oportunidades."
				pare
			caso 3:
				mensagem = "Não compense na ira o que lhe falta na razão."
				pare
			caso 4:
				mensagem = "Defeitos e virtudes são apenas dois lados da mesma moeda."
				pare
			caso 5:
				mensagem = "A maior de todas as torres começa no solo."
				pare
			caso 6:
				mensagem = "Acredite em você mesmo e o universo conspirará a seu favor."
				pare
			caso 7:
				mensagem = "Seja a mudança que você deseja ver no mundo."
				pare
			caso 8:
				mensagem = "O sucesso não é acidental, é resultado de esforço e dedicação."
				pare
			caso 9:
				mensagem = "Aprenda com o passado, viva o presente e sonhe com o futuro."
				pare
			caso 10:
				mensagem = "Sua criatividade é ilimitada, explore novos horizontes."
				pare
			caso 11:
				mensagem = "A jornada de mil quilômetros começa com um único passo."
				pare
			caso 12:
				mensagem = "A sorte favorece a mente preparada."
				pare
			caso 13:
				mensagem = "Seja corajoso, mesmo quando estiver com medo."
				pare
			caso 14:
				mensagem = "A amizade é o maior tesouro da vida."
				pare
			caso 15:
				mensagem = "A compaixão é a linguagem universal do coração."
				pare
			caso 16:
				mensagem = "Sorria, a felicidade é contagiante."
				pare
			caso 17:
				mensagem = "A cada desafio, surge uma oportunidade de crescimento."
				pare
			caso 18:
				mensagem = "O sucesso é a soma de pequenos esforços repetidos dia após dia."
				pare
			caso 19:
				mensagem = "A persistência é o caminho do êxito."
				pare
			caso 20:
				mensagem = "A compaixão é a linguagem universal do coração."
				pare
			caso 21:
				mensagem = "Seja grato pelo que tem, e mais virá até você."
				pare
			caso 22:
				mensagem = "Suas escolhas moldam seu destino, escolha sabiamente."
				pare
			caso 23:
				mensagem = "Cada novo dia é uma página em branco, escreva uma boa história."
				pare
			caso 24:
				mensagem = "O amor é a força mais poderosa do universo."
				pare
			caso 25:
				mensagem = "A melhor maneira de prever o futuro é criá-lo."
				pare
			caso 26:
				mensagem = "Seja gentil com cada pessoa que você encontrar."
				pare
			caso 27:
				mensagem = "A verdadeira beleza está na simplicidade."
				pare
			caso 28:
				mensagem = "O conhecimento é poder, compartilhe-o com o mundo."
				pare
			caso 29:
				mensagem = "A gratidão transforma o que temos em suficiente."
				pare
			caso 30:
				mensagem = "A cada desafio, surge uma oportunidade de crescimento."
				pare
			caso 31:
				mensagem = "O sucesso é a soma de pequenos esforços repetidos dia após dia."
				pare
			caso contrario:
				mensagem = "DIA INVÁLIDO!!!"
				pare
		}
	

		se (dia_aniversario>0 e dia_aniversario<32)
		{
			escreva("\n\n**************************************************************************\n")
			escreva("Sua Sorte: " + mensagem)
			escreva("\n**************************************************************************\n\n")			
		}
		senao
		{
			escreva(mensagem)
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2964; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */