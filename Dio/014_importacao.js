

const { gets, teste, print } = require('./014_funcoes-aux');

/* 

Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 -100
Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado. 

Dados de entrada:
5
50
10
98
23

Saída:
98


*/

const numSorteio = [];
let maiorValor = 0;

for (let i = 0; i < teste(); i++) {
    const valor = gets();
    numSorteio.push(valor);
    if (valor > maiorValor){
        maiorValor = valor;
    }

}


/*
for (let i = 0; i < numSorteio.length; i++) {
    const valor = numSorteio[i];
    if (valor > maiorValor) {
        maiorValor = valor;
    }

}
*/

console.log(numSorteio);
console.log(maiorValor);

//print(teste());

//console.log(funcoes.gets());



