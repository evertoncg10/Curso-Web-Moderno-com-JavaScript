//
const pessoa = {nome: 'João'};
pessoa.nome = 'Pedro';
console.log(pessoa);

//Pessoa vai receber novo objeto com um novo endereço de memória
//pessoa = {nome: 'Ana'}; - Gera erro

//Congela um objeto não alterando os atributos dele
Object.freeze(pessoa);
pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC'
console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'João'});
pessoaConstante.nome = "Maria";
console.log(pessoaConstante);