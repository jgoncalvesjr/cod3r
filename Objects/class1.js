class payment {
    constructor(name = 'Any', amount = 0) {
        this.name = name
        this.amount = amount
    }
}

class finCycle {
    constructor(month, year) {
        this.month = month
        this.year = year
        this.movements = []
    }
    addMovements(...movements) {
        movements.forEach(m => this.movements.push(m))
    }
    summary() {
        let consolidatedAmount = 0
        this.movements.forEach(m => {
            consolidatedAmount += m.amount
        })
        return consolidatedAmount
    }
}

const wage = new payment('Wage', 15000)
const hydro = new payment('Hydro', -150)

const bills = new finCycle(6, 2020)
bills.addMovements(wage, hydro)
console.log(bills.summary())