/*Faça um programa para calcular o valor de uma viagem. 

voce terá 3 variaveis. sendo elas:
 - 1 Preço do combustivel; 
 - 2 Gasto médio de combustivel do carro por KM;
 - 3 Distância em KM da viagem;

 Imprima no console o valor que será gasto de combustivel para realizar esta viagem.

 */

 console.log('Sistema calculo combustivel');

 const precoCombustivel = 5.79;
 const kmLitro = 12;
 let distanciaKm = 1580;

 let valorViagem = (distanciaKm/kmLitro)*precoCombustivel;

 console.log('valor da viagem é: ',valorViagem.toFixed(2));

