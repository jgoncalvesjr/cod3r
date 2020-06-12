/* 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

let evenOdd = numbers => {
    let even = 0
    let odd = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
        even++
        } else {
        odd++
        }
    }
    console.log(`This sequence has ${even} even numbers and ${odd} odd numbers.`)
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
evenOdd(array)