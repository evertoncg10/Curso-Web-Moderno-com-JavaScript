//Funciona no Mac e no Windows no Linux não irá funcionar
const moduloA = require('../../moduloa');
console.log(moduloA.ola);

//Correto
const moduloA2 = require('../../moduloA');
console.log(moduloA2.ola);

/* Dentro da pasta node_modules não precisa do caminho e sim colocar o nome do diretório do módulo
 * Ele busca o arquivo index.js dentro do diretório do módulo
 */
const saudacao = require('saudacao');
console.log(saudacao.ola);

// ./ significa que está na mesma pasta.
const c = require('./pastaC');
console.log(c.ola2);

// const http = require('http');
// http.createServer((request, response) => {
//   response.write('Bom dia');
//   response.end();
// }).listen(8080);


