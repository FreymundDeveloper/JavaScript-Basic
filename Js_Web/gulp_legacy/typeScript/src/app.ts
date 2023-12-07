import { Car, Saleable } from './product';

function show(value: Saleable) {
    console.log(`${value.name} cost ${value.price}!`);
}

const car = new Car;
car.name = 'Civic';
car.price = 89499.00;
show(car);