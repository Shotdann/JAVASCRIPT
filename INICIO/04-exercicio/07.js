/**
 * Criar algoritmo que retorne 
 * o preco do produto
 * mais o imposto
 */

function precoCompleto (preco, imposto) {
    return preco + preco * imposto;
}

let resultado = precoCompleto(19.90, 0.15);
console.log(resultado);