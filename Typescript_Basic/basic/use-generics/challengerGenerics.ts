// Challenger One

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

// Challenger Two

type ArrayMapping<N, S> = {key: N, value: S}

class Mapping<N extends number, S> {
    private arraylist: Array<ArrayMapping<N, S>> = new Array<ArrayMapping<N, S>>()

    constructor(){}

    public justPush(obj: ArrayMapping<N, S>): void {
        const equal = this.take(obj.key)
        equal !== null ? equal.value = obj.value : this.arraylist.push(obj)
    }

    public take(key: N): ArrayMapping<N, S> | null {
        const found = this.arraylist.find(item => item.key === key)
        return found ? found : null
    }

    public clear(): void {
        this.arraylist = new Array<ArrayMapping<N, S>>()
    }

    public printMap(): void {
        this.arraylist.forEach(itens => {
            console.log(itens)
        })
    }

}

const mapping = new Mapping<number, string>()
mapping.justPush({ key: 1, value: 'Pedro' })
mapping.justPush({ key: 2, value: 'Rebeca' })
mapping.justPush({ key: 3, value: 'Maria' })
mapping.justPush({ key: 1, value: 'Gustavo' })
 
console.log(mapping.take(2))
mapping.printMap()
mapping.clear()
mapping.printMap()