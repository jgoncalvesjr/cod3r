/* 26) Fazer um programa para encontrar todos os pares entre 1 e 100. */

function numberSweep () {
    for (let n = 1; n <= 100; n++) {
        if (n % 2 === 0) {
        console.log(n)
        }
    }
}

numberSweep()