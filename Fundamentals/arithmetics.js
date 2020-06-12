const [a, b, c, d] = [3, 5, 1, 15];

const soma = a + b + c + d;
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2;
const potenciacao = b ** a; // novidade ES7

console.log(soma, subtracao, multiplicacao, divisao, modulo, potenciacao);
console.log(soma, subtracao, multiplicacao, -divisao, modulo, potenciacao); // Exemplo de operador unário