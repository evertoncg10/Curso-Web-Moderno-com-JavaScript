//Exemplo de callback no browser

document.getElementsByName('body')[0].onclick = function (e){
    console.log('O evento ocorreu!');
};