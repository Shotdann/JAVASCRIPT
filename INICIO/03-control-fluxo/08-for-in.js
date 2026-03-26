let user = {
    id: 1,
    name: 'Cachorro',
    age: 45.
};

for (let prop in user) {                  // Maneira certa de imprimir os valores das vairaveis e o valor deles
    console.log(prop, user[prop]);
}

let animais = ['Jacare', 'Dinosauro', 'Gorila'];             
for  (let indice in animais) {                           //maneira antiga de imprimir os valores e variaveis do arrays 
    console.log(indice, animais[indice]);        
}