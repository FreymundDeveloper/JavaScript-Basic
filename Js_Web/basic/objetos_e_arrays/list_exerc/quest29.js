const segundoMaior = (numeros, maior = Math.max(...numeros)) => Math.max(...(numeros.filter(numero => numero != maior))) 

console.log(segundoMaior([12, 16, 1, 15]))