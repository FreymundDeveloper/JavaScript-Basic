function inicio_fim(array) {
    let vetor = []

    vetor.push(array.shift())
    vetor.push(array.pop())

    return vetor
}

console.log(inicio_fim([1, 2, 3, 4, 5]))