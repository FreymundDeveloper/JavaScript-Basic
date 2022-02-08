const vetor = [2, 5, -3, -9, 5, -1, 0];

let cont = 0;

for (let i = 0; i < vetor.length; i++) {
    if(vetor[i] < 0) {
        cont += 1;
    }
}

console.log(`Valores negativos: ${cont}`);