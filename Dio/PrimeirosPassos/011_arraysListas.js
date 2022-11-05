// lembrando 


const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(6.75);
notas.push(5);
notas.push(8);
notas.push(10);

let somaNotas = 0;

for (let index = 0; index < notas.length; index++) {
    somaNotas = somaNotas + notas[index];

}



console.log('Você fez ' + notas.length + ' prova(s) e sua média foi ' + (somaNotas / notas.length).toFixed(2));