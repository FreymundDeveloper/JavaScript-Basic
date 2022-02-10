const vetor = [1, 2, 3];
let soma = 0;

for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];   
}

console.log(`Resultado: ${soma / vetor.length}`);