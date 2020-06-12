/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo: 
Plano Aumento
  A     10%
  B     15%
  C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

let newSalary = (salary, career) => {
    switch(career) {
    case 'A':
    return salary * 1.1
    case 'B':
    return salary * 1.15
    case 'C':
    return salary * 1.2
    default:
    return 'Invalid career specified, please try again!'
    }
}

console.log(newSalary(40000,'A'))
console.log(newSalary(50000,'C'))
console.log(newSalary(36000,'B'))
console.log(newSalary(50000,'xpto'))