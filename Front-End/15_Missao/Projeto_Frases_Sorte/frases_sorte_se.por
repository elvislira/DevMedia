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

		se (dia_aniversario == 1)
			mensagem = "A vida trará coisas boas se você tiver paciência."
		senao se (dia_aniversario == 2)
			mensagem = "Demonstre amor e alegria em todas as oportunidades."
		senao se (dia_aniversario == 3)
			mensagem = "Não compense na ira o que lhe falta na razão."
		senao se (dia_aniversario == 4)
			mensagem = "Defeitos e virtudes são apenas dois lados da mesma moeda."
		senao se (dia_aniversario == 5)
			mensagem = "A maior de todas as torres começa no solo."
		senao se (dia_aniversario == 6)
			mensagem = "Acredite em você mesmo e o universo conspirará a seu favor."
		senao se (dia_aniversario == 7)
			mensagem = "Seja a mudança que você deseja ver no mundo."
		senao se (dia_aniversario == 8)
			mensagem = "O sucesso não é acidental, é resultado de esforço e dedicação."
		senao se (dia_aniversario == 9)
			mensagem = "Aprenda com o passado, viva o presente e sonhe com o futuro."
		senao se (dia_aniversario == 10)
			mensagem = "Sua criatividade é ilimitada, explore novos horizontes."
		senao se (dia_aniversario == 11)
			mensagem = "A jornada de mil quilômetros começa com um único passo."
		senao se (dia_aniversario == 12)
			mensagem = "A sorte favorece a mente preparada."
		senao se (dia_aniversario == 13)
			mensagem = "Seja corajoso, mesmo quando estiver com medo."
		senao se (dia_aniversario == 14)
			mensagem = "A amizade é o maior tesouro da vida."
		senao se (dia_aniversario == 15)
			mensagem = "A compaixão é a linguagem universal do coração."
		senao se (dia_aniversario == 16)
			mensagem = "Sorria, a felicidade é contagiante."
		senao se (dia_aniversario == 17)
			mensagem = "A cada desafio, surge uma oportunidade de crescimento."
		senao se (dia_aniversario == 18)
			mensagem = "O sucesso é a soma de pequenos esforços repetidos dia após dia."
		senao se (dia_aniversario == 19)
			mensagem = "A persistência é o caminho do êxito."
		senao se (dia_aniversario == 20)
			mensagem = "A compaixão é a linguagem universal do coração."
		senao se (dia_aniversario == 21)
			mensagem = "Seja grato pelo que tem, e mais virá até você."
		senao se (dia_aniversario == 22)
			mensagem = "Suas escolhas moldam seu destino, escolha sabiamente."
		senao se (dia_aniversario == 23)
			mensagem = "Cada novo dia é uma página em branco, escreva uma boa história."
		senao se (dia_aniversario == 24)
			mensagem = "O amor é a força mais poderosa do universo."
		senao se (dia_aniversario == 25)
			mensagem = "A melhor maneira de prever o futuro é criá-lo."
		senao se (dia_aniversario == 26)
			mensagem = "Seja gentil com cada pessoa que você encontrar."
		senao se (dia_aniversario == 27)
			mensagem = "A verdadeira beleza está na simplicidade."
		senao se (dia_aniversario == 28)
			mensagem = "O conhecimento é poder, compartilhe-o com o mundo."
		senao se (dia_aniversario == 29)
			mensagem = "A gratidão transforma o que temos em suficiente."
		senao se (dia_aniversario == 30)
			mensagem = "A cada desafio, surge uma oportunidade de crescimento."
		senao se (dia_aniversario == 31)
			mensagem = "O sucesso é a soma de pequenos esforços repetidos dia após dia."
		senao
			mensagem = "DIA INVÁLIDO!!!"

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
 * @POSICAO-CURSOR = 3766; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */