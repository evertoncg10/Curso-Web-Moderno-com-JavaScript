function trataErroELancar(e){
    throw new Error('...');
}

function imprimirNome(obj){
    try {
        console.log(obj.nome.toUpperCase() + '!!!');

    } catch(e) {
        trataErroELancar(e);
    } finally {
        console.log('Final...');
    }
}

const obj = {nome: 'Roberto'};
imprimirNome(obj);