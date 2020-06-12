/* 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

let annuity = (month, amount) => {
    if (month > 0 && month < 13) {
        delay = month - 1
        return `Annuity due: $${(amount * ((1 + (5/100)) ** delay)).toFixed(2)}` 
      } else { 
        return 'Not a valid month!'}
}

console.log(annuity(1, 100))
console.log(annuity(2, 100))
console.log(annuity(5, 100))
console.log(annuity(12, 100))
console.log(annuity())