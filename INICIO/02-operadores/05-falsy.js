// short-circuit


// Falso
// false
// 0
// Null
// underfined
// NaN
let nome = 'dia noite';
let username = nome || 'anonimo';
console.log(username);

function fn1() {
    console.log('sou fincao 1');
    return false;
}
function fn2() {
    console.log('sou fincao 2');
    return true;
}
let x = fn1() && fn2();