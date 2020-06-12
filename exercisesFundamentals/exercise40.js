/* 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

gradeToLevel = grades => {
    let levels = []
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 0 && grades[i] < 5) {
            levels.push('D')
        } else if (grades[i] >= 5 && grades[i] < 7) {
            levels.push('C')
        } else if (grades[i] >= 7 && grades[i] < 9) {
            levels.push('B')
        } else if (grades[i] >= 9 && grades[i] <= 10) {
            levels.push('A')
        } else {
            levels.push('Invalid grade')
        }
    }
    return levels
}

let grades = [10, 13, 9, 8.2, 2.5, 7.7, 6.8, -3, 8.99]
let gradeArray = gradeToLevel(grades)

console.log(gradeArray)