// Direct declaration

const object1 = {}
console.log(object1)

// Object within JS

console.log(typeof Object, typeof new Object)
const object2 = new Object
console.log(object2)

// Constructor Function

function product(name, price, discount) {
    this.name = name
    this.getDiscountPrice = () => {
        return price * (1 - discount)
    }
}

const p1 = new product('Pen', 1.99, 0.15)
const p2 = new product('Laptop', 499.95, 0.2)
console.log(p1.getDiscountPrice().toFixed(2), p2.getDiscountPrice().toFixed(2))

// Factory Function

function newEmployee(name, basewage, absences) {
    return {
        name,
        basewage,
        absences,
        getWage() {
            return (basewage/30) * (30 - absences)
        }
    }
}

const e1 = newEmployee('Joe', 3500, 4)
const e2 = newEmployee('Sarah', 4100, 1)

console.log(e1.getWage().toFixed(2), e2.getWage().toFixed(2))

// Object.create

const child = Object.create(null)
child.name = 'Sally'
console.log(child)

// fromJSON

const fromJSON = JSON.parse('{"info": "I am a JSON!"}')
console.log(fromJSON.info)
