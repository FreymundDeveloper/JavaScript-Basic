let vetor = [1, 2, 3, 4, 5];
let par = [];
let impar = [];

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0) {
        par.push(vetor[i]);
    }
    else if(vetor[i] % 2 == 1) {
        impar.push(vetor[i]);
    }
}

console.log(`Par: ${par}\nImpar: ${impar}`);