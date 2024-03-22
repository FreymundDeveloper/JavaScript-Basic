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