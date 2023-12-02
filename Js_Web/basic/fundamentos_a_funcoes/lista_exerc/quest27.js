function crecimento(altura_crianca1, crianca1, altura_crianca2, crianca2) {
    let menor = 0;
    let maior = 0;
    let menor_definit = undefined;
    let tempo = 0;
    let code = null;

    if (altura_crianca1 < altura_crianca2) {
        menor = altura_crianca1;
        maior = altura_crianca2;
        menor_definit = 'Criança1'
        code = 0

    } 
    
    else if(altura_crianca2 < altura_crianca1){
        menor = altura_crianca2;
        maior = altura_crianca1;
        menor_definit = 'Criança2';
        code = 1
    }

    let chave = true

    if (code == 0) {
        for (let i = 0; i < crianca1.length; i++) {
            menor += crianca1[i];
            maior += crianca2[i];

            if (menor > maior && chave == true) {
                tempo = i + 1;
                chave = false;
            }
        }
    }

    else if (code == 1) {
        for (let i = 0; i < crianca2.length; i++) {
            maior += crianca1[i];
            menor += crianca2[i];

            if (menor > maior && chave == true) {
                tempo = i + 1;
                chave = false;
            }
        }
    }

    if (menor_definit == undefined) {
        console.log(`Crianças de tamanho igual`);
    } else {
        console.log(`${menor_definit} é menor`);
        if(tempo != 0){
            console.log(`Ultrapassa a maior em ${tempo} anos`);
        }
    }
}

crecimento(101, [9, 2, 2, 9], 103, [2, 3, 5, 2]);