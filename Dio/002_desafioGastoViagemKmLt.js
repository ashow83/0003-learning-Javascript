/*Faça um programa para calcular o valor de uma viagem. 

voce terá 5 variaveis. sendo elas:
 - 1 Preço do etanol;
 - 2 Preço da gasolina
 - 3 O tipo de combustivel que esta no seu carro;  
 - 4 Gasto médio de combustivel do carro por KM;
 - 5 Distância em KM da viagem;

 Imprima no console o valor que será gasto de combustivel para realizar esta viagem.

 */

 console.log('Sistema calculo combustivel');

 const precoEtanol = 5.79;
 const precoGasolina = 6.66;
 let tipoCombustivel = 'Etanol'; 
 const kmLitro = 10;
 let distanciaKm = 100;

 if (tipoCombustivel === 'Gasolina'){
    let valorViagem = (distanciaKm/kmLitro)*precoEtanol;
    console.log('valor da viagem é para Etanol: ',valorViagem.toFixed(2));

 } else {
    let valorViagem = (distanciaKm/kmLitro)*precoGasolina;
    console.log('valor da viagem é para Gasolina: ',valorViagem.toFixed(2));

 }   

 

