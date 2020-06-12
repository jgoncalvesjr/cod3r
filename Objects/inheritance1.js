const ferrari = {
    model: 'F40',
    speed: 324
}

const volvo = {
    model: 'V40',
    speed: 229
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function myObject() {}
console.log(typeof Object, typeof myObject)
console.log(Object.prototype, myObject.prototype)
console.log(ferrari.prototype)