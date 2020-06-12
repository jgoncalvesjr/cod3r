const second = {name: 'Peter', hair: 'brown'}
const first1 = Object.create(second)
first1.name = 'Lisa'
console.log(first1.hair)

const first2 = Object.create(second, {
    name: {value: 'Jane', writable: false, enumerable: true}
})

console.log(first2.name)
first2.name = 'Carla'
console.log(`${first2.name} has ${first2.hair} hair`)

console.log(Object.keys(first1))
console.log(Object.keys(first2))


for(let key in first2) {
    first2.hasOwnProperty(key) ? 
    console.log(key) : console.log(`By inheritance: ${key}`)
}