/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

let number = num => {
    switch(num) {
        case 10:
        return 'Ten'
        case 9:
        return 'Nine'
        case 8:
        return 'Eight'
        case 7:
        return 'Seven'
        case 6:
        return 'Six'
        case 5:
        return 'Five'
        case 4:
        return 'Four'
        case 3:
        return 'Three'
        case 2:
        return 'Two'
        case 1:
        return 'One'
        case 0:
        return 'Zero'
        default:
        return 'Out of range!'
    }
}

console.log(number(6666))
console.log(number(-546))
console.log(number())
console.log(number(''))
console.log(number(10))
console.log(number(9))
console.log(number(8))
console.log(number(7))
console.log(number(6))
console.log(number(5))
console.log(number(4))
console.log(number(3))
console.log(number(2))
console.log(number(1))
console.log(number(0))