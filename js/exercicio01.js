'use strict';

let nota1 = 1;
let nota2 = 3;

// Versão 1:
/* let total = nota1 + nota2;
let media = total / 2; */

// Versão 2:
const media = (nota1 + nota2) / 2;

console.log(media);

if(media >= 7){
    console.log("aprovado");
} else if(media >= 5){
    console.log("recuperação");
} else {
    console.log("reprovado");
}



