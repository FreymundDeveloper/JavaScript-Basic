"use strict";
// Challenger One
class Line {
    constructor(line = []) {
        this.line = line;
    }
    enter(newEnter) {
        this.line.push(newEnter);
    }
    nextInLine() {
        const next = (this.line[0] === undefined) ? null : this.line[0];
        this.line.shift();
        return next;
    }
    printLine() {
        return this.line;
    }
}
let line = new Line(['Lucio', 'Will', 'Dave']);
line.enter('Elena');
console.log(line.printLine());
console.log(line.nextInLine());
console.log(line.printLine());
class Mapping {
    constructor() {
        this.arraylist = new Array();
    }
    justPush(obj) {
        const equal = this.take(obj.key);
        equal !== null ? equal.value = obj.value : this.arraylist.push(obj);
    }
    take(key) {
        const found = this.arraylist.find(item => item.key === key);
        return found ? found : null;
    }
    clear() {
        this.arraylist = new Array();
    }
    printMap() {
        this.arraylist.forEach(itens => {
            console.log(itens);
        });
    }
}
const mapping = new Mapping();
mapping.justPush({ key: 1, value: 'Pedro' });
mapping.justPush({ key: 2, value: 'Rebeca' });
mapping.justPush({ key: 3, value: 'Maria' });
mapping.justPush({ key: 1, value: 'Gustavo' });
console.log(mapping.take(2));
mapping.printMap();
mapping.clear();
mapping.printMap();
