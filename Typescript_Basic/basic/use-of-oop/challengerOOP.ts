// Challenger One

class Product {
    constructor(public name: string, public price: number, public discount: number = 0) {
        this.price = price - ((price / 100) * (100 * discount))
    }
}

const game = new Product('Dark Souls', 79.99)
const hardware = new Product('RTX', 3999, 0.5)

console.log(game, hardware)

// Challenger Two


// Challenger Three