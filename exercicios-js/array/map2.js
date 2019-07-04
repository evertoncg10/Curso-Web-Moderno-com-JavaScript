const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
];

// Retornar um array apenas com os preços

// Resolução do problema
let result = carrinho.map(function(e) {
    let obj = JSON.parse(e);
    return `R$ ${parseFloat(obj.preco).toFixed(2).replace('.', ',')}`;
});

console.log(result);

//Resolução do problema do Professor do Curso
const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);

console.log(resultado);
