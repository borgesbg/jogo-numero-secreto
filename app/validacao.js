function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido<div>';
        elementoChute.innerHTML += `<div>Chutes: ${tentativas}</div>`;
        tentativas ++
        return
    }

    if (numeroForMaiorOuMenorQueONumeroPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido, o número precisa estar entre ${menorValor} e ${maiorValor}<div>`;
        elementoChute.innerHTML += `<div>Chutes: ${tentativas}</div>`;
        tentativas ++
        return

    }

    if (numero === numeroSecreto) {
        if(tentativas >= 10){
            document.body.innerHTML =  `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            <div class="num-tentativas">Número de chutes utilizados: ${tentativas}</div>
            `
        }else{
            document.body.innerHTML =  `
            
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            <div class="num-tentativas">Você tem sorte! Com apenas ${tentativas} chutes, você acertou o número!</div>
            `
        }
        
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`;
        elementoChute.innerHTML += `<div>Chutes: ${tentativas}</div>`;
        tentativas ++
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
        elementoChute.innerHTML += `<div>Chutes: ${tentativas}</div>`;
        tentativas ++
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueONumeroPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})
