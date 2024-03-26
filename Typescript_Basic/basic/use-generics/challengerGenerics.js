"use strict";
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
