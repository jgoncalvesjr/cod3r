/* 35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor 
pilha e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console. */

let array1 = [1, 2, 3, 4, 5]
let array2 = [6, 7, 8, 9, 10]

finalArray = (arrayA, arrayB) => {
    for (let i = 0; i < arrayB.length; i++) {
        console.log(arrayB[i])
        arrayA.push(arrayB[i])
    }
    console.log('New elements: ' + arrayB)
    console.log('Final array: ' + arrayA)
}

finalArray(array1, array2)