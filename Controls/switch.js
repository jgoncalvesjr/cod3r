const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log ('Hall de Honra')
            break // se não incluir break, o JS entra automaticamente em fall through (continua o switch/case)
        case 8: case 7:
            console.log ('Aprovado')
            break
        case 6: case 5: case 4:
            console.log ('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log ('Reprovado')
            break
        default:
            console.log ('Nota inválida!')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.9)
imprimirResultado(3.98)
imprimirResultado(-1)
imprimirResultado(11)
imprimirResultado() // Com switch/case COMPILA!
imprimirResultado('LUL') // Com switch/case COMPILA!