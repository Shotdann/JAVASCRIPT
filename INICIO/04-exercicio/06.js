/**
 * Crear algoritmo que retorne quantidade 
 * de numero positivos de um array.
 */
let array = [2, 5, 7, 15, -5, -100, 55];

function quantosPositivos(arr) {
    let quantidade = 0;
    for (elemento of arr) {
        if (elemento > 0){
            quantidade++;
        }
    }
    return quantidade;
}

let resultado = quantosPositivos(array);
console.log(resultado);