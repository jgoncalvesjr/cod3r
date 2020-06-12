// Prototype chain
Object.prototype.attr0 = '0' // avoid this

const third = {attr1: 'A'}
const second = {__proto__: third, attr2: 'B', attr3: '3'}
const first = {__proto__: second, attr3: 'C'}
console.log(first.attr0, first.attr1, first.attr2, first.attr3)

const car = {
    spd: 0,
    maxSpd: 200,
    accel(delta) {
        if (this.spd + delta <= this.maxSpd) {
            this.spd += delta
        } else {
            this.spd = this.maxSpd
        }
    },
    status() {
        return `${this.spd}Km/h out of ${this.maxSpd}Km/h` 
    }
}

const ferrari = {
    model: 'F40',
    maxSpd: 324 // Shadowing
}

const volvo = {
    model: 'V40',
    status() {
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

volvo.accel(100)
console.log(volvo.status())

ferrari.accel(300)
console.log(ferrari.status())