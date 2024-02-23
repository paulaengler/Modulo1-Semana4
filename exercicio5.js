/* Utilizando um while, repita uma mini entrevista com 4 usuários perguntando qual a nota para avaliação da série "Stranger Things”, 
será apenas aceita três tipos de avaliação: ruim, bom e excelente. Depois verifique quantas pessoas classificaram a série como ruim.*/

const prompt = require("prompt-sync")();
let contador = 1;
let ruimContador = 0;
let bomContador = 0;
let excelenteContador = 0;

while (contador <= 4) {
    let avaliacao = prompt("Qual é a sua avaliação para a série 'Stranger Things?' (ruim, bom ou excelente)");

    if (avaliacao === "ruim" || avaliacao === "bom" || avaliacao === "excelente") {
        if (avaliacao === "ruim") {
            ruimContador++;
        } else if (avaliacao === "bom") {
            bomContador++;
        } else {
            excelenteContador++;
        }
        contador++;
    } else {
        console.log("Opção inválida. Por favor, selecione uma das opções disponíveis: 'ruim', 'bom' ou 'excelente'.");
    }
}

console.log("Número de pessoas que classificaram 'Stranger Things' como ruim:", ruimContador);