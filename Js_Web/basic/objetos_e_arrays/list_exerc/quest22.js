const random = (numero, numero_sorteado = Math.floor(Math.random() * 11)) =>
numero == numero_sorteado ? `Parabéns! O número sorteado foi o ${numero_sorteado}` : `Que pena. O número sorteado foi o ${numero_sorteado}`

console.log(random(2))