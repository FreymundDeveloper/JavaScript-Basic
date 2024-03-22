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
class Motorcycle {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
    honk() {
        console.log('Toooooooooot!');
    }
    accelerate(delta) {
        return this.speed = this.speed + delta;
    }
}
const moto = new Motorcycle('Ducati');
moto.honk();
console.log(moto.speed);
moto.accelerate(30);
console.log(moto.speed);
// Challenger Four
class Object2D {
    constructor(width = 0, height = 0) {
        this.width = width;
        this.height = height;
    }
}
class Rectangle extends Object2D {
    area() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(5, 7);
console.log(rectangle.area());
// Challenger Five
class Internship {
    constructor() {
        this._firstName = '';
    }
    static getInternship() {
        return Internship.internship;
    }
    get name() {
        return this._firstName;
    }
    set name(text) {
        (text.length >= 3) ? this._firstName = text : this._firstName = '';
    }
}
Internship.internship = new Internship;
console.log(Internship.getInternship().name);
Internship.getInternship().name = 'Le';
console.log(Internship.getInternship().name);
Internship.getInternship().name = 'Leonardo';
console.log(Internship.getInternship().name);
