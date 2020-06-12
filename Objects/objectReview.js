// Dynamic collection of key/value pair 
const product = new Object
product.name = 'Chair'
product['Brand'] = 'Generic'
product.price = 220

console.log(product)
delete product.price
delete product['Brand']
console.log(product)

const car = {
    model: 'A4',
    value: 25000,
    owner: {
        name: 'John',
        age: 52,
        address: {
            street: '101 Danoforth Ave',
            unit: 420 
        }
    },
    drivers: [{
        name: 'Joe',
        age: 18
    }, {
        name: 'Mary',
        age: 21
    }],
    insurancePrice: function() {
        // your function here 
    }
}

console.log(car)
car.owner.address.unit = 171
car['owner']['address']['street'] = '113 Pape Ave'
console.log(car)
delete car.drivers
console.log(car)
delete car.owner.address
console.log(car)
delete car.insurancePrice
console.log(car)
console.log(car.drivers) // WATCH OUT - WILL COMPILE (Undefined)
console.log(car.drivers.length) // WATCH OUT - Undefined attributes in Objects WON´T COMPILE!
