/**
 * Crear algoritmo que retorne numero 
 * menor e maior de um array.
 */
let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMaior(arr) {
    let menor = arr[0];
    let maior = arr[0];
    for (numero of arr) {
    menor = menor < numero ? menor : numero;  // MAIOR codigo para comparar de variavel por variavel ( numeros ) dentro do array 
    maior = maior > numero ? maior : numero;  // MENOR
    }
    return [menor, maior];
}
let numeros = getMenorMaior(array)
console.log(numeros);