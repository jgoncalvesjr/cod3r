/* 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

childCompare = (chd1height, chd1growth, chd2height, chd2growth) => {
    if (chd1height === chd2height) {
        if (chd1growth > chd2growth) {
            return 'The first child will become taller than the second child next year.'
        } else if (chd1growth < chd2growth) {
            return 'The second child will become taller than the first child next year.'
        } else {
            return 'Both children have the same height and will grow at the same time.'
        }
    } else { 
        if (chd1height > chd2height) {
            if (chd1growth >= chd2growth) {
                return 'The shorter child will never reach the taller child.'
            } else {
                return timeCalc(chd2height, chd2growth, chd1height, chd1growth)
            }
        } 
        else {
            if (chd2growth >= chd1growth) {
                return 'The shorter child will never reach the taller child.'
            } else {
                return timeCalc(chd1height, chd1growth, chd2height, chd2growth)
            }
        }
    }
}

timeCalc = (heightShort, growthShort, heightTall, growthTall) => {
    let years = 0
    while (heightShort < heightTall) {
        heightShort += growthShort
        heightTall += growthTall
        years++
    }
    return `The shorter child will reach the taller child in ${years} years.`
}

console.log(childCompare(150, 2, 130, 4))
console.log(childCompare(140, 3, 140, 4))
console.log(childCompare(120, 3, 121, 4))
console.log(childCompare(120, 4, 120, 3))
console.log(childCompare(121, 4, 120, 3))
console.log(childCompare(115, 4, 130, 3))
console.log(childCompare(115, 4, 115, 4))