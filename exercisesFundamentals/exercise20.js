/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

let atmWithdrawal = amount => {
    let notes100 = 0
    let notes50 = 0
    let notes10 = 0
    let notes5 = 0
    let notes1 = 0
    let noteValue = calcNoteAmount(amount)
    while (amount >= noteValue) {
        switch (noteValue) {
            case 100:
                amount -= 100
                notes100++
                break
            case 50:
                amount -= 50
                notes50++
                break
            case 10:
                amount -= 10
                notes10++
                break
            case 5:
                amount -= 5
                notes5++
                break
            case 1:
                amount -= 1
                notes1++
                break    
        }
        noteValue = calcNoteAmount(amount)
    }
    return noteResult(notes100, notes50, notes10, notes5, notes1)
}

let calcNoteAmount = amount => {
    if (amount >= 100) {
        return 100 
    } else if (amount >= 50) {
        return 50
    } else if (amount >= 10) {
        return 10
    } else if (amount >= 5) {
        return 5
    } else if (amount >= 1) {
        return 1
    }
}

let noteResult = (notes100, notes50, notes10, notes5, notes1) => {
    let result = ''
    if (notes100 > 0) {
    result += `${notes100} $100 notes, `}
    if (notes50 > 0) {
    result += `${notes50} $50 notes, `}
    if (notes10 > 0) { 
    result += `${notes10} $10 notes, `}
    if (notes5 > 0) { 
    result += `${notes5} $5 notes, `}
    if (notes1 > 0) { 
    result += `${notes1} $1 notes. `}
    return result
} 

console.log(atmWithdrawal(688))
console.log(atmWithdrawal(153))
console.log(atmWithdrawal(99))