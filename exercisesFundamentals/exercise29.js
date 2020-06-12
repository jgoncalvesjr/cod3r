/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

let numberCheck = numbers => {
    let yea = 0
    let nay = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 10 && numbers[i] <= 20) {
        yea++
        } else {
        nay++
        }
    }
    console.log(`This sequence has ${yea} numbers between 10 and 20 and ${nay} numbers outside the designated interval.`)
}

array = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
numberCheck(array)