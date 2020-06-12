/* 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

const insurancePrice = age => {
    let price = 100
    if (age < 10) {
        return price = price + 80
    } else if (age <= 30) {
        return price = price + 50
    } else if (age <= 60) {
        return price = price + 95
    } return price = price + 130
} 

console.log(insurancePrice(7))
console.log(insurancePrice(11))
console.log(insurancePrice(30))
console.log(insurancePrice(48))
console.log(insurancePrice(60))
console.log(insurancePrice(71))