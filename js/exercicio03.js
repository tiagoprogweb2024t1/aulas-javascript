'use strict';

let cotacaoDoDia = 5.16;
let valorEmDolar = 1000;

function converterEmReais(valor){
    return valor * cotacaoDoDia;
}

console.log( converterEmReais(valorEmDolar) );

