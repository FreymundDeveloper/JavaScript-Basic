const filtro = (numeros, equivalente) => numeros.filter(numero => String(numero).length === equivalente)

console.log(filtro([38, 2, 365, 10, 125, 11], 3))