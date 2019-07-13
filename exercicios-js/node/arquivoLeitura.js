const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

//Leitura de forma sincrona... Trava o event loop só libera quando finalizar a leitura do arquivo
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// Leitura de forma assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
});


// Caso o arquivo seja Json a maneira mais interessante para ler o arquivo
const config = require('./arquivo.json');
console.log(config.db);

//Leitura de uma pasta(diretório)
fs.readdir(__dirname, (err, arquivos) => {
    console.log("Conteúdo da pasta...");
    console.log(arquivos);
});