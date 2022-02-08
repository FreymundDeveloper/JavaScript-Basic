const vetor = [2, 5, 3, 9, 5, -1, 0];

let maior = vetor[0];
let menor = vetor[0];

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i];
    }

    if (vetor[i] < menor) {
        menor = vetor[i];
    }
}

console.log(`Maior: ${maior}\nMenor: ${menor}`);