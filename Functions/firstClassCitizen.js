// Higher-Order function -- First-Class Object (Citizen)

// Forma literal
function fun1() { }

// Armazenar em variável
const fun2 = function () { }

// Armazenar em array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em atributo de Object
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar Function como Parameter
function run(fun){
    fun()
}
run(function () {console.log('Executando...')})

// Function pode retornar/conter uma Function
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)