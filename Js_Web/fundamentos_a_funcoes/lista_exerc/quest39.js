function troca(vetor1, vetor2) {
    const tamanho = vetor1.length;

    for (let i = 0; i < tamanho; i++) {
        vetor1.push(vetor2[i]);
        vetor2.push(vetor1[i]);  
    }

    vetor1.splice(0, tamanho);
    vetor2.splice(0, tamanho);

    console.log(`Vetor1: ${vetor1}\nVetor2: ${vetor2}`);
}

troca([1, 2, 3], [4, 5, 6]);