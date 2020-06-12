/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */
let array = [1, 2, 3, 4, 5, 6, 7]

arrayMultiplier = (array, mult) => {
    let resultArray = []
    array.forEach(element => {
        resultArray.push(element * mult)
    });

    return resultArray
}

arrayMultiplier2 = (array, mult) => {
    let resultArray = []
    array.forEach(element => {
        if (element > 5) {
        resultArray.push(element * mult) }
    });

    return resultArray
}

console.log(arrayMultiplier(array, 3))
console.log(arrayMultiplier2(array, 4))