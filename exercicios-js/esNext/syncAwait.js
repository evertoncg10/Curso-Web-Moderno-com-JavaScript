// com promise...
const http = require('http');

const getTurma = letra => {
	const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
	return new Promise((resolve, reject) => {
		http.get(url, res => {
			let resultado = '';

			res.on('data', dados => {
				resultado += dados;
			});

			res.on('end', () => {
				try {
					resolve(JSON.parse(resultado));
				} catch (e) {
					reject(e);
				}
			});
		});
	});
};

// Recurso acrescentado no ES8
// Objetivo de simplificaro uso de promises...

// Função async retorna um objeto AsyncFunction
let obterAlunos = async() =>{
    const turmaA = await getTurma('A');
    const turmaB = await getTurma('B');
    const turmaC = await getTurma('C');
    return [].concat(turmaA, turmaB, turmaC);
};

obterAlunos().then(alunos => alunos.map(aluno => aluno.nome))
             .then(nomes => console.log(nomes));