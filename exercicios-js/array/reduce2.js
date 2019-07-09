const alunos = [
	{nome: 'João', nota: 7.3, bolsista: false},
	{nome: 'Maria', nota: 9.2, bolsista: true},
	{nome: 'Pedro', nota: 9.8, bolsista: true},
	{nome: 'Ana', nota: 8.7, bolsista: false},
];

//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
const resultado1 = alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas);
console.log(resultado1);

//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
const resultado2 = alunos.map(aluno => aluno.bolsista).reduce(algumBolsista);
console.log(resultado2);