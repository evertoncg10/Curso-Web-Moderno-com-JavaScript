// let e const (ES6 - 2015)
/*
 * var tem escopo de função e escopo global
 * let e const tem escopo de bloco
 */
{
    var a = 2;
    let b = 3
}
console.log(a);
//console.log(b); //Gera erro pois foi definido dentro do bloco

//Template String
const produto = 'iPad';
console.log(`${produto} é caro!`);

//Destructuring
const [l,e, ...tras] = "Cod3r";
console.log(l, e, tras);

const [x, y] = [1, 2, 3];
console.log(x, y);

const {idade, nome} = {nome: 'Ana', idade: 9};
console.log(idade, nome);