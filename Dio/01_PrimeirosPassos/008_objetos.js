
const pessoa = {
    nome: 'Adriano Show',
    idade: 39,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }


};

// pessoa.descrever();


class Gente {
    nome;
    idade;
    anoDeNascimento;



    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    
    }


    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const Adriano = new Gente('Adriano', 39);
const Enzo = new Gente('Enzo Bueno', 7);
Adriano.descrever();
Enzo.descrever();
console.log(Adriano);


// comparando pessoas (gente)

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

compararPessoas(Adriano, Enzo);










