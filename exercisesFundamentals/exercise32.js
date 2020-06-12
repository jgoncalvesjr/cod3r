/* 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

let artihmeticAvg = numbers => {
    let divSum = 0
    for (let i = 0; i < numbers.length; i++) {
        divSum += numbers[i]
    }
    return (divSum / numbers.length)
}

array = [3, 4, 5, 6, 7]
console.log(artihmeticAvg(array))