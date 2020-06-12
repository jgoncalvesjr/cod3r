/* 12) Faça um algoritmo que calcule o fatorial de um número. */

let factorial = n => {
    if (n < 0) { 
        return 'Not possible to calculate factorials for negative numbers!'
    } else if (n === 0) {
    return 1
    } else
    {return (n != 1) ? n * factorial(n - 1) : 1} 
}

console.log(factorial(0))
console.log(factorial(-8))
console.log(factorial(1))
console.log(factorial(5))