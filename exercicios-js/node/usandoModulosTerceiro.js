/*
 * quando for instalar modulos de terceiros pela 1ª vez tem que usar o comando [npm init -y] para criar 
 * o arquivo package.json. Somnte após estar criado o arquivo package.json executar comando de instalação
 * do módulo que deseja instalar.
*/

const _ = require('lodash');
setInterval( () => console.log(_.random(1, 1000)), 2000 );