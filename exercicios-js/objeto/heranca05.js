console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

console.log('Escola Cod3R'.reverse());

Array.prototype.first = function(){
    return this[0];
}

console.log([1, 2, 3, 4, 5].first());
console.log(['A, B, C, D, E'].first());

// Não Fazer. Não substituir métodos já implementados no prototype.
String.prototype.toString = function() {
    return 'Lascou tudo';
}

console.log('Escola Cod3r'.reverse());