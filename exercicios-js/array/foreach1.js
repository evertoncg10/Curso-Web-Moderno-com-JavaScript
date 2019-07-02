const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
});

//Usando Arrow Function
aprovados.forEach(nome => console.log(nome));

//Armazenando a função em uma constante
const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);