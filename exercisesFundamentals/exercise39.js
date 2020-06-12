/* 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

arraySwap = (arrayA, arrayB) => {
    if (arrayA.length == arrayB.length) {
        for (i = 0; i < arrayA.length; i++) {
            [arrayA[i], arrayB[i]] = [arrayB[i], arrayA[i]]
        }
    } else {
        return console.log('Arrays have different lenghts, not supported!')
    }
    console.log('New Array A: ' + arrayA)
    console.log('New Array B: ' + arrayB)
}

let arrayA = [1, 2, 3]
let arrayB = [4, 5, 6]
let arrayC = [1, 2, 3, 4]

arraySwap(arrayA, arrayB)
arraySwap(arrayC, arrayB)