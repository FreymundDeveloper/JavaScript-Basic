const inverte = (object, invt = Object.entries(object).map(pares => pares.reverse())) => Object.fromEntries(invt)

console.log(inverte({ a: 1, b: 2, c: 3}))
    