
            let listaDeNumerosSorteados = [];
            let possibilidadesDeNumeros = 100; //essa linha é onde mudamos a quantidade de numeros que serão sorteados
            let numeroSecreto = gerarNumeroAleatorio(); // essa variável atribui uma função a ela mesma
            let tentativas = 1;

            
function exibirTextoNaTela(tag, texto) { //essa FUNÇÃO tem como objetivo substituir o texto no documento HTML
            let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
}

function exibirMensagemInicial() {

        exibirTextoNaTela('h1', 'Jogo do número secreto'); //Aqui estamos chamando a função, substituindo em qual tag ela vai colocar o texto
        exibirTextoNaTela('p', `Escolha um número entre 1 e ${possibilidadesDeNumeros}`);
        
}
exibirMensagemInicial()

function verificarChute() { 

            let chute = document.querySelector('input').value; //Aqui estamos dizendo para o js pegar o valor da caixa de texto do html, colocado pelo usuário, e usar como comparativo
            
    if (chute == numeroSecreto) {

            let palavra =  tentativas > 1 ? 'tentativas' : 'tentativa';
            let quantidadeDeTentativas = `Parabéns você acertou o número secreto em ${tentativas} ${palavra}`;

        exibirTextoNaTela('p', quantidadeDeTentativas);
        exibirTextoNaTela('h1', 'Acertou!');
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {

        exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);

        } else {

        exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);

        }

tentativas = tentativas + 1

limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * possibilidadesDeNumeros + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == possibilidadesDeNumeros) {
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    limparCampo()
    console.log(numeroSecreto)
}










