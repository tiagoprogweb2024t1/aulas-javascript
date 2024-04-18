'use strict';

// Requisitos para aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

// Aluno de exemplo
let aluno = "Dayane";
let mediaFinal = 8;
let faltas = 2;
let resultado;

// Operador E/AND (&&)
if( mediaFinal >= mediaMinima  &&  faltas <= limiteDeFaltas ){
    resultado = "aprovado";
} else {
    resultado = "reprovado";
}

console.log(resultado);





