function leitorNumerico(valor) {
    switch (valor) {
        case 0:
            console.log(`Zero`);
            break;

        case 1:
            console.log(`Um`);
            break;

        case 2:
            console.log(`Dois`);
            break;

        case 3:
            console.log(`Três`);
            break;

        case 4:
            console.log(`Quatro`);
            break;

        case 5:
            console.log(`Cinco`);
            break;

        case 6:
            console.log(`Seis`);
            break;

        case 7:
            console.log(`Sete`);
            break;

        case 8:
            console.log(`Oito`);
            break;
            
        case 9:
            console.log(`Nove`);
            break;

        case 10:
            console.log(`Dez`);
            break;
    
        default:
            console.log(`Valor invalido`);
            break;
    }
}

leitorNumerico(0);
leitorNumerico(1);
leitorNumerico(7);
leitorNumerico(10);
leitorNumerico(-1);