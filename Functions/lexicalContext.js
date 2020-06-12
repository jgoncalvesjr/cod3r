const valor = 'Global'

function myFunction() {
    // const valor = 'Local'
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    myFunction()
}

exec()