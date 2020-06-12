// Closure é o escopo criado quando uma Function é declarada
// Esse escopo permite à Function acessar e manipular variáveis EXTERNAS à Function

// Contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const myFunction = fora()
console.log(myFunction())