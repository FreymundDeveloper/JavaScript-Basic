function quantidadeDeNotas(valor) {
    if(valor >= 100){
        console.log(`${Math.floor(valor / 100)} nota/s de 100`);
        valor = valor % 100;
    }

    if(valor >= 50){
        console.log(`${Math.floor(valor / 50)} nota/s de 50`);
        valor = valor % 50;
    }

    if(valor >= 10){
        console.log(`${Math.floor(valor / 10)} nota/s de 10`);
        valor = valor % 10;
    }

    if(valor >= 5){
        console.log(`${Math.floor(valor / 5)} nota/s de 5`);
        valor = valor % 5;
    }

    if(valor > 0){
        console.log(`${valor} nota/s de 1`);
    }
}

quantidadeDeNotas(2157);