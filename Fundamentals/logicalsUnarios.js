let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);
--num1; // unário à esquerda tem precedência
console.log(num1);

console.log(++num1 === num2--); // prova da regra de alteração por unário
console.log(num1 === num2); // confirmação da regra

// Evitar unários em expressões, por conta dessa propriedade. Deixa o código confuso