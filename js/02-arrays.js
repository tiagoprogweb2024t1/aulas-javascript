'use strict';

/* VETOR (ARRAY DE UMA DIMENSÃO) */

// Declarando um array de alunos
const alunos = ["Wilian", "Vinicius", "Marli", "Duda", "Gabriel"];

// Exibindo a estrutura do array (somente no console)
console.log(alunos);

// Acessando individualmente alguns alunos ATRAVÉS DO ÍNDICE
console.log(alunos[1]); // Vinicius
console.log(alunos[3]); // Duda
console.log(alunos[0]); // Wilian

/* Mini-exercício (FAÇA AQUI MESMO!)

- Crie um novo array com o nome de 7 coisas que você gosta (artista, banda, música, livro... sei la, inventa!) */
const bandas = ["Slayer", "Rush", "Pink Floyd", "Van Halen", "Black Sabbath", "Nightwish", "Deep Purple"];

// console.log(bandas);

/*- Em seguida, mostre uma frase personalizada no console indicando o nome do segundo, do quinto e do sétimo elemento do array. */

// Template String
console.log(
    `Gosto MUITO da banda ${bandas[1]}, mas também da banda ${bandas[4]} e do ${bandas[6]}.`
);

// Concatenação
console.log(
    "Gosto MUITO da banda "+bandas[1]+", mas também da banda "+bandas[4]+" e do " +bandas[6]+"."
);

/* MATRIZ (array com mais de uma dimensão) */
const tecnologias = [

    ["HTML5", "CSS3", "JavaScript"],

    ["PHP", "Node.js", "SQL", "Python", "Firebase"]

];

console.log(tecnologias[0][1]); // CSS3