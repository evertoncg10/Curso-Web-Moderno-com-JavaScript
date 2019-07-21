//Arrow Function (ES6)
const soma = (a, b) => a + b;
console.log(soma(2, 3));

const soma2 = (a, b) => {
    return a + b;
};
console.log(soma2(3, 3));

const lexico1 = () => console.log(this === exports);
lexico1();

const lexico2 = lexico1.bind({});
lexico2();

//parametro default
function log(texto = 'Node') {
    console.log(texto);
}

log();
log('JavaScript');

//operador rest
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
}
console.log(total(2, 3, 6, 5, 9));
