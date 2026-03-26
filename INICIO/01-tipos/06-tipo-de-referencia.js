//personagem de tv
let nome = "Tanjiro";
let anime = "Demon slayer";
let idade = 17;

let personaje = {
    nome: "Tanjiro",
    anime: "Demon slayer",
    idade: 17,
}
console.log(personaje);
console.log(personaje.nome);
console.log(personaje['anime']);

personaje.idade = 18;

let chave = 'idade';
personaje['idade'] = 19;

delete personaje.anime;
console.log(personaje);