/* 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

highLow = array => {
    let high
    let low 
    for (i = 0; i < array.length; i++) {
        if (high === undefined && low === undefined) {
            high = array[i]
            low = array[i]
        } else {
            if (array[i] > high) {
                high = array[i]
            } 
            if (array[i] < low) {
                low = array[i]
            }
        }
    }
    return [high, low]
}

array = [10, 5, 7, 3, 2, 3, 11, 20, 6, 9]

console.log(highLow(array))