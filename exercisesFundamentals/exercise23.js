/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

finalEvaluation = (studentId, test1, test2, test3) => {
    let grades = []
    grades.push(test1)
    grades.push(test2)
    grades.push(test3)
    grades.sort((a,b) => a < b ? 1 : -1) // Sort array descending. Flip compare to sort ascending.

    let finalGrade = (grades[0]*4 + grades[1]*3 + grades[2]*3) / 10
    console.log(`Student ID: ${studentId}. Grades: ${test1}, ${test2}, ${test3}. Result: ${finalGrade < 5 ? 'Failed.' : 'Approved.'}`) 
}

finalEvaluation(616, 4, 7, 3)
finalEvaluation(319, 4, 7, 4)

let sorttest = ['Hewey', 'Dewey', 'Louie']
    sorttest.sort((a,b) => a < b ? 1 : -1) // Sort array descending. Flip compare to sort ascending.

console.log(sorttest)