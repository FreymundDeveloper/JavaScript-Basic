// Challenger One

class Product {
    constructor(public name: string, public price: number, public discount: number = 0) {
    }

    // Challenger Two

    private calculate(): number {
        return parseFloat((this.price * (1 - this.discount)).toFixed(2))
    }

    public resume(): string {
        return `${this.name} cost R$${this.calculate()} (${this.discount * 100}% of discount)`
    }
}

const game = new Product('Dark Souls', 79.99)
const hardware = new Product('RTX', 3999, 0.5)

console.log(`${game.resume()} and ${ hardware.resume()}`)

// Challenger Three

class Motorcycle {
    public speed: number = 0

    constructor(public name: string){

    }
 
    public honk(): void {
        console.log('Toooooooooot!')
    }
 
    public accelerate(delta: number): number {
        return this.speed = this.speed + delta
    }
}
 
const moto = new Motorcycle('Ducati')
moto.honk()
console.log(moto.speed)
moto.accelerate(30)
console.log(moto.speed)
 
// Challenger Four

abstract class Object2D {
    constructor(public width: number = 0, public height: number = 0){

    }

    abstract area(): number
}

class Rectangle extends Object2D {
    public area(): number {
        return this.width * this.height
    }
}
 
const rectangle = new Rectangle(5, 7)
console.log(rectangle.area())
 
// Challenger Five

class Internship {
    private _firstName: string = ''

    private static internship: Internship = new Internship
    private constructor(){}

    static getInternship(): Internship {
        return Internship.internship
    }

    get name(): string {
        return this._firstName
    }

    set name(text: string) {
        (text.length >= 3) ? this._firstName = text : this._firstName = ''
    }
}
 
console.log(Internship.getInternship().name)
Internship.getInternship().name = 'Le'
console.log(Internship.getInternship().name)
Internship.getInternship().name = 'Leonardo'
console.log(Internship.getInternship().name)