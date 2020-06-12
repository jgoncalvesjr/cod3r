class third {
    constructor(lastname) {
        this.lastname = lastname
    }
}

class second extends third {
    constructor(lastname, occupation = 'Teacher') {
        super(lastname)
        this.occupation = occupation
    }
}

class First extends second {
    constructor() {
        super('Smith')
    }
}

const first = new First
console.log(first)