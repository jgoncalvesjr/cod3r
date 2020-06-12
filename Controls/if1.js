function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com nota ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.9)

function soSeVerdadeFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

// FALSE

soSeVerdadeFalo()
soSeVerdadeFalo(null)
soSeVerdadeFalo(undefined)
soSeVerdadeFalo(NaN)
soSeVerdadeFalo('')
soSeVerdadeFalo(0)

// TRUE

soSeVerdadeFalo(-1)
soSeVerdadeFalo(' ')
soSeVerdadeFalo('Treta')
soSeVerdadeFalo([])
soSeVerdadeFalo([1, 2])
soSeVerdadeFalo({})