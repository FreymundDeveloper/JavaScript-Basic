function round(x) {
    return Math.ceil(x / 5) * 5;
}

function avaliador(notas) {
    for (let i = 0; i < notas.length; i++) {
        if(notas[i] >= 38){
            notas[i] = `Aprovado com nota ${round(notas[i])}`;
        }
        else{
            notas[i] = `Reprovado com nota ${notas[i]}`;
        }
    }

    return notas;
}

console.log(avaliador([58, 29, 83, 90]));