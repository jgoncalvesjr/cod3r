/* 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos,
bem como a soma dos elementos. */

let aP = (n, a1, r) => {
    for (let i = 0; i < n ; i++) {
        console.log(a1 + r * i )
    }
    console.log('Sum: '+ (n * (a1 + (a1 + ((n-1)*r))))/2)
}

let gP = (n, a1, r) => {
    for (let i = 0; i < n ; i++) {
        console.log(a1*(r**i))
    }
    console.log('Sum: '+ + (a1 * ((r**n)-1))/(r-1))
}

aP(15,10,15)
console.log('------------')
gP(15,10,15)
