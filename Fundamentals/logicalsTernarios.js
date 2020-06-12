/*const resultado = nota => nota >= 7 // expressão relacional
? 'Aprovado' // if 
: 'Reprovado' // else */

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(7.1));
console.log(resultado(6.99));