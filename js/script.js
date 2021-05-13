class EscolherJogada{
	jogadaEscolhida(opcao){
		const opcaoEscolhida = document.getElementById('jogadaEscolhidaJogador')
		opcaoEscolhida.src = `img/${opcao}.png`
		opcaoEscolhida.style.width = "100px"

		const jogadaMaquina = new JogadaMaquina()
		jogadaMaquina.escolherJogadaMaquina(opcao)

		document.getElementById('pedra').disabled = true
		document.getElementById('pedra').style.cursor = 'no-drop'

		document.getElementById('papel').disabled = true
		document.getElementById('papel').style.cursor = 'no-drop'

		document.getElementById('tesoura').disabled = true
		document.getElementById('tesoura').style.cursor = 'no-drop'
	}

	reloadPagina(){
		let opcaoEscolhida = document.getElementById('jogadaEscolhidaJogador').src = ''
		let opcoesJogadas = document.getElementById('jogadaEscolhidaMaquina').src = ''
		document.getElementById('vencedor').innerHTML = 'Escolha sua jogada'

		document.getElementById('pedra').disabled = false
		document.getElementById('pedra').style.cursor = 'pointer'

		document.getElementById('papel').disabled = false
		document.getElementById('papel').style.cursor = 'pointer'

		document.getElementById('tesoura').disabled = false
		document.getElementById('tesoura').style.cursor = 'pointer'
	}
}

class JogadaMaquina{
	escolherJogadaMaquina(jogadaJogador){
		const opcoesJogadas = document.getElementById('jogadaEscolhidaMaquina')
		let opcoes = Math.floor((Math.random() * 3) + 1);

		switch(opcoes){
			case 1:
				opcoesJogadas.src = `img/pedra.png`
				opcoesJogadas.style.width = "100px"
				opcoes = 'pedra'
				break

			case 2:
				opcoesJogadas.src = `img/papel.png`
				opcoesJogadas.style.width = "100px"
				opcoes = 'papel'
				break
			
			case 3:
				opcoesJogadas.src = `img/tesoura.png`
				opcoesJogadas.style.width = "100px"
				opcoes = 'tesoura'
				break		
		}

		const anunciarVencedor = new AnunciarVencedor()
		anunciarVencedor.vencedorEscolhido(jogadaJogador, opcoes)
	}
}

class AnunciarVencedor{

	vencedorEscolhido(jogadaJogador, jogadaMaquina){

		if(jogadaJogador == jogadaMaquina){
			this.vencedorAdicionar('Empate')
		}

		if(jogadaJogador == 'pedra' && jogadaMaquina == 'tesoura'){
			this.vencedorAdicionar('Jogador')
		}else if(jogadaJogador == 'pedra' && jogadaMaquina == 'papel'){
			this.vencedorAdicionar('Máquina')
		}

		if(jogadaJogador == 'papel' && jogadaMaquina == 'tesoura'){
			this.vencedorAdicionar('Máquina')
		}else if(jogadaJogador == 'papel' && jogadaMaquina == 'pedra'){
			this.vencedorAdicionar('Jogador')
		}

		if(jogadaJogador == 'tesoura' && jogadaMaquina == 'papel'){
			this.vencedorAdicionar('Jogador')
		}else if(jogadaJogador == 'tesoura' && jogadaMaquina == 'pedra'){
			this.vencedorAdicionar('Máquina')
		}
	}

	vencedorAdicionar(valor){
		let pontuacao = new Pontuacao()

		if(valor == 'Jogador'){
			document.getElementById('vencedor').innerHTML = `${valor} ganhou!`
			pontuacao.gerarPontuacao(valor)
		}else if( valor == 'Máquina'){
			document.getElementById('vencedor').innerHTML = `${valor} ganhou!`
			pontuacao.gerarPontuacao(valor)
		}else{
			document.getElementById('vencedor').innerHTML = 'Empate!'
			pontuacao.gerarPontuacao(valor)
		}
	}

}

class Pontuacao{
	gerarPontuacao(vencedor){
		if(vencedor == 'Jogador'){
			document.getElementById('pontuacaoJogador').innerHTML = parseFloat(document.getElementById('pontuacaoJogador').innerHTML) + 1
		}else if(vencedor == 'Máquina'){
			document.getElementById('pontuacaoMaquina').innerHTML = parseFloat(document.getElementById('pontuacaoMaquina').innerHTML) + 1
		}
	}
}

let escolherJogada = new EscolherJogada()

let reiniciarJogo = new EscolherJogada()

