"use strict";
// Challenger One
class Product {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.price = price - ((price / 100) * (100 * discount));
    }
}
const game = new Product('Dark Souls', 79.99);
const hardware = new Product('RTX', 3999, 0.5);
console.log(game, hardware);
// Challenger Two
// Challenger Three
