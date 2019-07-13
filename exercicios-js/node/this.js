console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
    console.log('Dentro de uma função...');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);

    // Está inserindo dentro do global
    this.perigo = 'Perigo!!!!'
}

    // Está inserindo dentro do gmodule.exports
    this.perigo = 'Perigo!!!!'

logThis();