"use strict";
// Challenger One
class Product {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    // Challenger Two
    calculate() {
        return parseFloat((this.price * (1 - this.discount)).toFixed(2));
    }
    resume() {
        return `${this.name} cost R$${this.calculate()} (${this.discount * 100}% of discount)`;
    }
}
const game = new Product('Dark Souls', 79.99);
const hardware = new Product('RTX', 3999, 0.5);
console.log(`${game.resume()} and ${hardware.resume()}`);
// Challenger Three
