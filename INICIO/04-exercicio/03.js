/**
 * Indice validar que nao seja menor a cero e que o elementi exista 
 * no array
 */

function getbyIdx(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return 'Elemento nao exite';
    }
    return arr[idx];

}

let resultado = getbyIdx([1, 2], 1);
console.log(resultado);