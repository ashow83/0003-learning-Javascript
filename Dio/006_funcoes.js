function sayMyName(name) {
    console.log('Your name is: ' + name);
}

function quadradoi(valor) {
    return valor * valor;

}

function incrementoJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;

}

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {

    if (imc < 18.5) {
        return 'IMC - Abaixo do peso';
    } else if (imc < 25.1) {
        return 'IMC - Peso normal';
    } else if (imc < 30.1) {
        return 'IMC - Acima do peso';
    } else if (imc < 40.1) {
        return 'IMC - Obeso';
    } else {
        return 'IMC - Obesidade grave';
    }

}


// Main
(function () {
    console.log('Programa principal')
    let peso2 = 85;
    let altura2 = 1.78;

    const imc = calcularImc(peso2, altura2);
    console.log(imc.toFixed(2) + ' - ' + classificarImc(imc));
})();


