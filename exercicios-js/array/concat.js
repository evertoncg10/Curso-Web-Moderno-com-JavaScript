const filhas = ['Ualeskah', 'Cibalena'];
const filhos = ['Uoxiton', 'Uesclei'];
const todos = filhas.concat(filhos);
const todos2 = filhas.concat(filhos, 'Fulano');

console.log(todos, filhas, filhos);
console.log(todos2, filhas, filhos);


console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));
console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]));