function tratarErroLancar(erro){
    // throw 10
    // throw true
    // throw 'MENSAGEM'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
    console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroLancar (e)
    } finally {
        console.log('Final')
    }
}

const obj = { name: 'Ronaldo' }
imprimirNomeGritado(obj);