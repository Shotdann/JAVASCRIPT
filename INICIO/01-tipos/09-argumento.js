function soma(a, b) {
    console.log(arguments);
    return a + b;
}

let resultado = soma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof soma);


