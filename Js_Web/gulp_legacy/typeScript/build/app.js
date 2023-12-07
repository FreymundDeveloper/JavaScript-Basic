"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
function show(value) {
    console.log(value.name + " cost " + value.price + "!");
}
var car = new product_1.Car;
car.name = 'Civic';
car.price = 89499.00;
show(car);
