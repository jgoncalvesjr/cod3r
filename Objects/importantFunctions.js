const person = {
    name: 'Rebecca',
    age: 2,
    weight: 13
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
})

Object.defineProperty(person, 'DOB', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

person.DOB = '01/01/2018'
console.log(person.DOB)

// Object.assign (ES 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4, d: 5}
const obj = Object.assign(dest, o1, o2) // merges and overwrites values within all objects (last over first)
Object.freeze(obj)
obj.c = 1234
console.log(obj)

