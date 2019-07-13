const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data;
    //console.log(funcionarios);
    
    // buscar no array de funcionarios a mulher chinesa com menor sálario
    const isMulher = funcionario => funcionario.genero === 'F';
    const isChineses = funcionario => funcionario.pais === 'China';
    const menorSalario = (funcionario, funcionarioAtual) => {
        return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual;
    };
    const func = funcionarios.filter(isMulher).filter(isChineses).reduce(menorSalario);
    console.log(func);
});