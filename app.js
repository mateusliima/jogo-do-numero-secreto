let listaDeNumerosSortedos = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function exibirMensagemInicial () {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','tente advinhar o número de 1 a 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        let palavraTentativas = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
        
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'Tente um número menor');
        } else {
            exibirTextoNaTela('p', 'Tente um número maior');
        }
        tentativas++;
        limparCampo();
    }
   
}

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSortedos.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSortedos = [];
    }
    if (listaDeNumerosSortedos.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio;
    } else {
        listaDeNumerosSortedos.push(numeroEscolhido);
        return numeroEscolhido;
    }   
}

function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}