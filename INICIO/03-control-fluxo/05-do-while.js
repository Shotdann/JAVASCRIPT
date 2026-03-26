// quais sao numeros pares 
// no WHILE o computador primeiro confere se atende a condicao e logo depois executa o codigo do if 
let i = 2;
while (i < 2 == 0) {
    if (i % 2 == 0) {
        console.log('Numero par', i);
    }
    i++;
}


// no DO WHILE executa primeiro o codigo if e logo depois vai conferir se o codigo atende a condicao

do {
    if (i % 2 == 0) {
        console.log('Numero par', i);
    }
} while(i < 2);