/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de 
etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo 
adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let prProduto = 100;

let formaPag = 3;

if (formaPag === 1) {
    console.log('Débito a vista - 10% desconto: ', (prProduto * 0.9).toFixed(2));
} else if (formaPag === 2) {
    console.log('Dinheiro ou PIX - 15% desconto: ', (prProduto * 0.85).toFixed(2));
} else if (formaPag === 3) {
    console.log('Cartão até Duas vezes: ', (prProduto).toFixed(2));
} else if (formaPag === 4) {
    console.log('Cartão Acima Duas vezes: ', (prProduto * 1.1).toFixed(2));
}

