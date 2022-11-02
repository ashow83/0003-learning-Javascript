/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carros {
    marca;
    cor;
    gastoKm;

    constructor(marca, cor, gastoKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoKm = gastoKm;
        
    } 

    calcularGasto(distanciaKM, prCombustivel){
        return (this.gastoKm * distanciaKM) * prCombustivel;

    }


}

let litro = 1
const uno = new Carros('ford', 'azul', (litro / 12));
console.log(uno);

teste = uno.calcularGasto(70, 5);
console.log(teste)
