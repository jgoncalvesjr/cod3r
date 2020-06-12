/* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console. */

const market = fruit => {
    switch(fruit) {
        case 'apple':
            console.log('We don´t sell apples here, sorry.')
            break
        case 'kiwi':
            console.log('We are out of stock for kiwis!')
            break
        case 'watermelon':
            console.log('Here you have it, for $2/lb.')
            break
        default:
            console.log('Error, not a valid fruit!')    
    }
}

market()
market(333)
market('tomato')
market('apple')
market('watermelon')
market('kiwi')