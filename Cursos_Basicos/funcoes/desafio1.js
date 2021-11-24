function range(a, b, s){

    if (b === undefined && s === undefined) {
        const lista = []
        for (let i = 1; i <= a; i++) {
            lista.push(i)
        }
        return lista
    }
    else if (s === undefined) {
        if (a <= b) {
            const lista = []
            for (let i = a; i <= b; i++) {
                lista.push(i)
            }
            return lista
        }
        else{
            const lista = []
            for (let i = a; i >= b; i--) {
                lista.push(i)
            }
            return lista
        }
    }
    else{
        if (a <= b) {
            const lista = []
            for (let i = a; i <= b; i+=s) {
                lista.push(i)
            }
            return lista
        }
        else{
            const lista = []
            for (let i = a; i >= b; i-=s) {
                lista.push(i)
            }
            return lista
        }
    }
    
}

console.log(range(5))
console.log(range(6, 11))
console.log(range(10, 19, 2))
console.log(range(6, 2))
console.log(range(8, -3, 4))