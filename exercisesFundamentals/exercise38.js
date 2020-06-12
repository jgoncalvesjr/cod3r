/* 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

function printOdd (first = 0, last = 100) { // won´t work as Arrow Function
    if (first > last) {
       // first = first + last 
       // last = first - last 
       // first = first - last
       // [first, last] = [last, first] // simpler swap
       last = [first, first = last][0] // simpler swap, alternative
       console.log(first, last)
    }
    for (let i = first; i <= last; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

printOdd(25,10)
printOdd(10,25)