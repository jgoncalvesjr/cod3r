/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

let division3 = num => {
    if (num % 3 == 0)
    {return true}
    else {return false}
}

console.log(division3(9))
console.log(division3(11))
console.log(division3(-333))
console.log(division3(782))
console.log(division3(521))