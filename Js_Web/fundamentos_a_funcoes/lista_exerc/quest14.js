function frutas(fruta) {
    switch (fruta) {
        case 'Maça':
            console.log('Não vendemos esta fruta aqui');
            break;
        case 'Kiwi':
            console.log('Estamos com escassez de kiwis');
            break;

        case 'Melancia':
            console.log('Aqui está, são 3 reais o quilo');
            break;

        default:
            console.log('Opç invalida!!')
            break;
    }
}

frutas('Maça');
frutas('Kiwi');
frutas('Melancia')
frutas('Banana');