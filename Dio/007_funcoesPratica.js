function escreverNome(nome) {
    return 'Meu nome é ' + nome;
}

//escreverNome('Adriano');
//escreverNome('Show');

function confereIdade(idade) {
    if (idade >= 18) {
        console.log('Tenho ' + idade + ' ano(s) e sou maior de idade')
    } else {
        console.log('Tenho ' + idade + ' ano(s) e sou menor de idade')
    }
}

//confereIdade(9);


/* forma de pgto especial */


function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros /100)));
}


let prProduto = 100;

let formaPag = 4;

if (formaPag === 1) {
    console.log('Débito a vista - 10% desconto: ' + aplicarDesconto(prProduto, 10).toFixed(2));
} else if (formaPag === 2) {
    console.log('Dinheiro ou PIX - 15% desconto: ' + aplicarDesconto(prProduto, 15).toFixed(2));
} else if (formaPag === 3) {
    console.log('Cartão até Duas vezes: ', (prProduto).toFixed(2));
} else if (formaPag === 4) {
    console.log('Cartão Acima Duas vezes: ' + aplicarJuros(prProduto, 10).toFixed(2));
}




function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    return media;
}

console.log(calcularMedia(5, 5));






