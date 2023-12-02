function pares_dos_pares(array) {
    let valido = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 && i % 2 == 0) {
            valido.push(array[i])
        }  
    }
    return valido
} 

console.log(pares_dos_pares([10, 70, 22, 43]))