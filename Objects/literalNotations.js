const a = 1
const b = 2
const c = 3
const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}

console.log(obj1, obj2)

const nameAttr = 'grade'
const valAttr = 7.6

const obj3 = {}
obj3[nameAttr] = valAttr
console.log(obj3)

const obj4 = {[nameAttr]: valAttr}
console.log(obj4)

const obj5 = {
    func1: function() {
        //...
    },
    func2() {
        //...
    }
}

console.log(obj5)