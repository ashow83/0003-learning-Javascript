
const entradas = [5, 50, 10, 98, 23, 500, 150];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function teste() {
    return entradas.length;
}

function print(texto) {
    console.log(texto);

}

module.exports = { gets, teste, print };