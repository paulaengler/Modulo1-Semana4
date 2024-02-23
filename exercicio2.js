/* Crie uma função nomeada que recebe um número e devolva uma string dizendo se é par ou ímpar. */

function ParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "O número " + numero + " é par.";
    } else {
        return "O número " + numero + " é ímpar.";
    }
}

var numero = 5
var resultado = ParOuImpar(numero);
console.log(resultado)