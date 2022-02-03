function avaliaDia(dia) {
    let avalia = dia;

    if(dia % 7 == 0 && dia != 0){
        avalia = (dia % 7) + 1;
    }

    switch (avalia) {
        case 1:
            return `${dia} não é um dia util`;
        
        case 0:
            return `Dia invalido`;
    
        default:
            return `${dia} é um dia util`;
    }
}

console.log(avaliaDia(27));