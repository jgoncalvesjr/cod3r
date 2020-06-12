// Object.preventExtensions

const product = Object.preventExtensions({
    name: 'Any', price: 1.99, tag: 'clearance'
})
console.log('Extensible:', Object.isExtensible(product))

product.name = 'Eraser'
product.description = 'White school eraser'
delete product.tag
console.log(product)

// Object.seal 

const person = {name: 'John', age: 35}
Object.seal(person)
console.log('Sealed:', Object.isSealed(person))

person.lastname = 'Smith'
delete person.name
person.age = 26
console.log(person)

// Object.freeze = Object.seal + writable is FALSE
