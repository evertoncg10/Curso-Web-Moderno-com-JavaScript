const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "Ipad Pro", preco: 4199, fragil: false },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

console.log('Filtro utilizando Frágil:', produtos.filter(function(produto){
    return produto.fragil;
}));

//Refatoração utilizando Arrow Function
console.log('Filtro utilizando Frágil com Arrow:',produtos.filter(produto => produto.fragil));
console.log('Filtro utilizando Preço:', produtos.filter(produto => produto.preco > 500));


//Resolução desafio da Aula
const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));

