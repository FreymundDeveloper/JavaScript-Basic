class Line<T> {
    constructor(private line: Array<T> = []){}

    public enter(newEnter: T): void {
        this.line.push(newEnter)
    }

    public nextInLine(): T | null {
        const next = (this.line[0] === undefined) ? null : this.line[0]
        this.line.shift()
        return next
    }

    public printLine(): T[] {
        return this.line
    }
}

let line = new Line<string>(['Lucio', 'Will', 'Dave'])
line.enter('Elena')
console.log(line.printLine())
console.log(line.nextInLine())
console.log(line.printLine())