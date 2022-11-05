/*

2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.


*/

const nunLista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let newLista = [];

for (let i = 0; i < nunLista.length; i++) {
    if (nunLista[i] % 2 === 0) {
        //console.log(nunLista[i]);
         newLista.push(nunLista[i]);
       
    }
    
}

console.log(newLista);
