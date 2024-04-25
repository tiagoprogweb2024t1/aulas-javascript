'use strict';

// Seleção dos elementos
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");
const video = document.querySelector("video");

// Criando um objeto de áudio referenciando o arquivo
const efeitoSonoro = new Audio();
efeitoSonoro.src = "wow.wav";

// Criando um objeto de imagem referenciando o arquivo
const imagem = new Image();
imagem.src = "wow.gif"; // ou meme.gif

/* Se quiser criar referência de video via JS */
// const video = document.createElement("video");
// video.src = "pink-floyd.mp4";
// video.width = 354;
// video.height = 196;


/* Criando um Ouvinte de Evento (Event Listener)
O primeiro parâmetro do addEventListener é o tipo de evento que
queremos "ouvir/monitorar". O segundo parâmetro é uma função (conhecida como callback) responsável por executar ações
no momento em que o evento acontecer. */
exemplo01.addEventListener("click", function(){
    // Exibindo um texto no parágrafo mensagem
    mensagem.textContent = "Beleza! Evento acionado, função executada 😁";
    
    // Ativando uma classe para o mensagem
    mensagem.classList.add("destaque");

    // Modificando a fonte do body
    pagina.style.fontFamily = "Arial";

    // Executando o áudio
    efeitoSonoro.play();

    // Inserindo a imagem após o parágrafo de mensagem
    mensagem.insertAdjacentElement("afterend", imagem);    

    // Remover o atributo hidden (isso fará o vídeo aparecer)
    video.removeAttribute("hidden");
    video.play(); // Reproduzir o video
});

