function avaliador(notas) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 0 && notas[i] <= 4.9) {
            console.log(`Aluno ${i + 1}: D`);
        }
        else if (notas[i] >= 5 && notas[i] <= 6.9) {
            console.log(`Aluno ${i + 1}: C`);
        }
        else if (notas[i] >= 7 && notas[i] <= 8.9) {
            console.log(`Aluno ${i + 1}: B`);
        }
        else if (notas[i] >= 9 && notas[i] <= 10) {
            console.log(`Aluno ${i + 1}: A`);
        }
        else {
            console.log(`Nota invalida`);
        }
    }
}

avaliador([10, 5, 8, 1.5, 9.4]);