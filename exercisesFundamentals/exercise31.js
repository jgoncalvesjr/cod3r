/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

let negativeCheck = numbers => {
    let negative = 0
    let notnegative = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
        negative++
        } else {
          notnegative++
        }
    }
    console.log(`This sequence has ${negative} numbers and ${notnegative} numbers that are not negative.`)
}

array = [-7, 8, 9, -10, 11, 12, 16, -17, 18, 19, 20, -21, 0]
negativeCheck(array)