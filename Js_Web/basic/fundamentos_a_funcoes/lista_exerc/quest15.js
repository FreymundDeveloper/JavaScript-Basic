function concessionaria(modelo) {
    switch (modelo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso');
            break;

        case 'caminhonetes':
        case 'motocicletas':
        case 'sedans':
            console.log('Tem certeza que não prefere este modelo?');
            break;
    
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui');
            break;
    }
}

concessionaria('hatch');
concessionaria('motocicletas');
concessionaria('Monociclo');