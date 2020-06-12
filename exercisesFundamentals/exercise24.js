/* 24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição 
while. */

let printer = n => {
    n = 11
    while (n > 0) {
    console.log('Hello world!')
    n-- 
    }
}

printer()