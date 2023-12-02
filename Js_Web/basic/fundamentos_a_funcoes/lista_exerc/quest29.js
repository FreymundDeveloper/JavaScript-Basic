function entreDez_e_Vinte(vetor) {
    let cont1 = 0;
    let cont2 = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            cont1 += 1;
        }
        else {
            cont2 += 1;
        }
        
    }

    console.log(`Entre 10 e 20: ${cont1}\nFora: ${cont2}`);
}

entreDez_e_Vinte([1, 10, 20, 14, 29]);