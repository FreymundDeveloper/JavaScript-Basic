const media = numeros => numeros.reduce((total, valor_atual) => total + valor_atual, 0) / numeros.length

console.log(media([1, 2, 3, 4, 5]))