'use strict';

let cotacaoDoDia = 5.16;
let valorEmDolar = 1000;

function converterEmReais(valor){
    return valor * cotacaoDoDia;
}

function formatarMoeda(valor, siglaDaMoeda, localizacao){
    const opcoes = {
        style: "currency",
        currency: siglaDaMoeda
    };

    return new Intl.NumberFormat(
        localizacao, opcoes
    ).format(valor);
}

// Versão sem formatação
console.log( converterEmReais(valorEmDolar) );

// Versão 1 (função como parâmetro para outra função) com formatação
console.log( 
    formatarMoeda( converterEmReais(valorEmDolar), "BRL", "pt-br" ) 
);

// Versão 2 (primeiro, guardamos o resultado da conversão; depois passamos o resultado para a formatação)
let resultadoEmReais = converterEmReais(valorEmDolar);
console.log( formatarMoeda(resultadoEmReais, "BRL", "pt-br") );

// Formatando o valor em dólar
console.log( formatarMoeda(valorEmDolar, "USD", "en") );
