// person -> mem address -> (...)
const person = {name: 'John'}
person.name = 'Peter' // no changes to const person
console.log(person)

// person -> new mem address -> (...)
// will NOT compile, trying to manipulate const to new mem address, instead of Object

// person = {name: 'Mary'}

Object.freeze(person) // halts any changes to an Object, making it a Constant
person.name = 'Mary'
person.address = '123 Broadview Ave'
delete person.name
console.log(person.name)
console.log(person)

// This can be applied at the moment you creat a new Object

const constPerson = Object.freeze({name: 'Joe'})
console.log(constPerson)