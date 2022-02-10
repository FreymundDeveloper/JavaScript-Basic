function primeira(vetor, valor) {
    let result = [];

    for (let i = 0; i < vetor.length; i++) {
        result.push(vetor[i] * valor);
    }

    return result;
}

function segunda(vetor, valor) {
    if (valor > 5) {
        let result = [];

        for (let i = 0; i < vetor.length; i++) {
            result.push(vetor[i] * valor);
        }

        return result;
    }
    else{
        return 'valor invalido';
    }
}

console.log(`Função1: ${primeira([1, 2, 3], 5)}\nFunção2: ${segunda([1, 2, 3], 6)}`)
console.log(`\nFunção1: ${primeira([1, 2, 3], 5)}\nFunção2: ${segunda([1, 2, 3], 5)}`)