'use strict';

// Declarando um objeto SIMPLES
const livro = {
    titulo: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: 3,
    ano: 1954
};

console.log(livro);

// Acessando cada propriedade
console.log(livro.titulo);
console.log(livro.autor);

console.log(
    `${livro.titulo} foi criado por ${livro.autor}`
);

/* Mini-exercício (FAÇA AQUI MESMO) */

/* 1) Crie um novo objeto chamado "carro" contendo as seguintes características:

- Marca (exemplo: Fiat)
- Modelo (exemplo: Uno)
- ano de fabricação (exemplo: 1996)
- quantidade de portas: (exemplo: 2)
- cor: (exemplo: branca)
- lista de opcionais (ar-condicionado, vidros elétricos, alarme) */

// Objeto com Array
const carro = {
    marca: "Fiat",
    modelo: "Uno com escada",
    anoDeFabricacao: 1996,
    portas: 2,
    cor: "branco",

    // Propriedade como array
    opcionais: ["Ar-condicionado", "vidro elétrico", "alarme"]
};

/* 2) Mostre a seguinte mensagem no console:
O Fiat Uno fabricado em 1996 com 2 portas e com vidros elétricos, 
foi um famoso carro no Brasil. */
console.log(
    `O ${carro.marca} ${carro.modelo} fabricado em ${carro.anoDeFabricacao} com ${carro.portas} portas e com ${carro.opcionais[1]}, foi um famoso carro no Brasil.`
);

// Objeto com array e outro objeto
const pessoa = {
    nome: "Chapolin Colorado",
    idade: 20,

    /* Obs: usamos aspas neste caso pois não se trata
    de números matemáticos ou monetários. */
    telefones: ["11-2135-0300", "11-96666-5555"],
    
    // Propriedade como objeto
    medidasFisicas: {
        peso: 75,
        altura: 1.66
    }
};

console.log(`O ${pessoa.nome} tem ${pessoa.medidasFisicas.peso}kg e ${pessoa.medidasFisicas.altura}m de altura. Contato: ${pessoa.telefones}.`);