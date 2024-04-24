'use strict';

/* Funções/métodos mais comuns para seleção de elementos no DOM 

- getElementById()
Seleciona UM ELEMENTO através do atributo ID

- querySelector()
Seleciona UM ELEMENTO através de seletor baseado na lógica CSS

- querySelectorAll()
Seleciona VÁRIOS ELEMENTOS através de seletor(es) baseado na lógica CSS */

// Exemplo 1: getElementById()
const legenda = document.getElementById("legenda");
console.log(legenda);

// Exemplo 2: querySelector()
const titulo = document.querySelector("h1");
console.log(titulo);

const sobreFront = document.querySelector("#sobre");
console.log(sobreFront);

/* Mini-exercícios
1) Faça o acesso/seleção do h2 de Back-End e mostre no
console. */
const backEnd = document.querySelector(".back-end");
console.log(backEnd);

/* 2) Faça o acesso/seleção apenas do h2 existente dentro da div com a classe 'editores' e mostre no console. */
const codigo = document.querySelector(".editores h2");
console.log(codigo);

// Exemplo 3: querySelectorAll()    - obs: funciona parecido com array
const subtitulos = document.querySelectorAll("h2");
console.log(subtitulos);
console.log(subtitulos[0]);

const variosElementos = document.querySelectorAll("p, a, p b, #teste, .xyz");
console.log(variosElementos);

/* Modificando o DOM */
