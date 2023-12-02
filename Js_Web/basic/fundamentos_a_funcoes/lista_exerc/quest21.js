function planoDeSaude(idade) {
    let valor_plano = 100;

    if(idade < 10){
        valor_plano += 80;
    }
    else if(idade >= 10 && idade < 30){
        valor_plano += 50;
    }
    else if(idade >= 30 && idade < 60){
        valor_plano += 95;
    }
    else{
        valor_plano += 130;
    }

    console.log(`Valor a pagar: R$${valor_plano}`);
}

planoDeSaude(39);

