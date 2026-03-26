// o comando CONTINUE  podemos usar para pular o resto do codigo de baixo quando a condicao seja cumprida

let i = 0;
while (i < 5) {
    i++;
    if (i === 2 ) {
        continue;
    }
    if (i === 4) {
        break;             // comando BREAK usado maiormente para for, for in, for of, do while  
    }
    console.log(i);
}