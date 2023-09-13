// import soma from './modulos/funcoes.mjs';
//importando um único recurso

import{soma, subtrai, multiplica, divisao} from './modulos/funcoes.mjs'

let resultadoSoma = soma (10, 50);
let resultadoSubtrai = subtrai (89, 18);
let resultadoMultiplica = multiplica (2, 15);
let resultadoDivisao = divisao (40, 10);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Subtração: ${resultadoSubtrai}`);
console.log(`Multiplicação: ${resultadoMultiplica}`);
console.log(`Divisão: ${resultadoDivisao}`);
