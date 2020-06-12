function myObject() {}
console.log(myObject.prototype)

const obj1 = new myObject
const obj2 = new myObject

console.log(obj1.__proto__ === obj2.__proto__)
console.log(myObject.prototype === obj1.__proto__)

myObject.prototype.name = 'Anonymous'
myObject.prototype.talk = function() {
    console.log(`My name is ${this.name}`)
}

obj1.talk()
obj2.name = 'Joe'
obj2.talk()

const obj3 = {}
obj3.__proto__ = myObject.prototype
obj3.name = 'Jack'
obj3.talk()

// In a nutshell

// TRUE

console.log((new myObject).__proto__ === myObject.prototype)
console.log(myObject.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

// FALSE 

console.log(Object.prototype.__proto__ === undefined)
