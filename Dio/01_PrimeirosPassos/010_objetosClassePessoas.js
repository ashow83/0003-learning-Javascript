/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura)
    }

    classificarIMC() {
        const imc = this.calcularIMC();

        if (imc < 18.5) {
            return (' - Abaixo do peso');
        } else if (imc < 25.1) {
            return (' - Peso normal');
        } else if (imc < 30.1) {
            return (' - Acima do peso');
        } else if (imc < 40.1) {
            return (' - Obeso');
        } else {
            return (' - Obesidade grave');
        }

    }

}


const p2 = new Pessoa('Enzo', 25, 1.23);
const p1 = new Pessoa('Adriano', 85, 1.78);
//console.log(p1); 

const teste1 = p1.calcularIMC();
const teste2 = p2.calcularIMC();

console.log('IMC de: ' + p1.nome + ' é ' + teste1.toFixed(2) + p1.classificarIMC());

console.log('IMC de: ' + p2.nome + ' é ' + teste2.toFixed(2) + p2.classificarIMC());

