/**
 * crear algoritmo que tome um array de 
 * objetos e retorne um array de pares
 */
let array = [{
    id: 1,
    name: 'NIcolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'cachorro',
}];

let pares = [
    [1, { id: 1, name: "Nicolas"}],
    [2, { id: 2, name: "Felipe"}],
    [3, { id: 3, name: "cachorro"}],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs [idx] = [elemento.id, elemento];
    }
    return pairs;
}
let resultado = toPairs(array);
console.log(resultado)