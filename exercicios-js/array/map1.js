const nums = [1, 2, 3, 4, 5];

//For com propósito
let resultado = nums.map(function(e) {
    return e * 2;
});

// Refatoração usando Arrow Function
let resultado2 = nums.map(e => e * 2 );

console.log(resultado, nums);
console.log(resultado2, nums);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

//Utilização do map encadeando vários maps
resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
resultado2 = nums.map(soma10).map(paraDinheiro);
resultado3 = nums.map(triplo).map(soma10).map(paraDinheiro);
console.log(resultado);
console.log(resultado2);
console.log(resultado3);