const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';

// Template String

const template = `
    Olá
    ${nome}!`;

console.log(concatenacao, template);

// Expressões matemáticas

console.log(`1 + 1 = ${1 + 1}`);

// Incluir funções em Template Strings

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);
