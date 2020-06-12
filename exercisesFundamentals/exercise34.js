/* 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

stringCheck = (string1, string2) => {
    let sameChars
    for (let i = 0; i < string1.length; i++) {
        let charString1 = string1.charAt(i).toLowerCase()
        for (let n = 0; n < string2.length; n++) {
            let charString2 = string2.charAt(n).toLowerCase()
            if (charString1 == charString2) {
                sameChars = true
                break
            } else {
                sameChars = false
            }
        }
        if (!sameChars) {
            return sameChars
        }
    }
    return sameChars
}

console.log(stringCheck('abcd', 'DcAe'))
console.log(stringCheck('abcd', 'DcAb'))
console.log(stringCheck('abcd', 'DcAbe'))
console.log(stringCheck('abcd', 'DcAke'))