let a = 3;
global.b = 123;
this.c = 456;
this.d = false;
this.e = 'Teste';

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variável maluca - sem var ou let

abc = 3 // JAMAIS FAÇA ISSO !!!!!
console.log(global.abc)

// module.exports = { c: 456, d: false, e: 'Teste' }