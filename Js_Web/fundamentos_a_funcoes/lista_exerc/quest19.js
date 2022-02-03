function cardapio(item, quantia) {
    switch (item) {
        case 100:
            console.log(`Total R$${quantia * 3.00}`);
            break;

        case 200:
            console.log(`Total R$${quantia * 4.00}`);
            break;

        case 300:
            console.log(`Total R$${quantia * 5.50}`);
            break;

        case 400:
            console.log(`Total R$${quantia * 7.50}`);
            break;

        case 500:
            console.log(`Total R$${quantia * 3.50}`);
            break;

        case 600:
            console.log(`Total R$${quantia * 2.80}`);
            break;
    
        default:
            console.log('Item invalido');
            break;
    }
}

cardapio(100, 3);
cardapio(500, 1);
cardapio(300, 2);
cardapio(2, 0);