let dobro = function(a) {
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

/* 
 * Não é necessário parenteces quando tem apenas um parâmetro. 
 * E não precisa chaves quando tem apenas uma linha. 
 */
dobro = a => 2 * a; 

let ola = function(){
    return 'Olá';
}

ola = () => 'Olá';
ola = _ => 'Olá'; //Possui um parâmetro.

console.log(ola());