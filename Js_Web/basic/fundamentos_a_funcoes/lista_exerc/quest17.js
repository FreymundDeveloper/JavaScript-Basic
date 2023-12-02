function salario(plano, salario) {
    switch (plano) {
        case 'A':
            console.log(`Novo salario ${salario + (salario * 0.10)}`);
            break;

        case 'B':
            console.log(`Novo salario ${salario + (salario * 0.15)}`);
            break;

        case 'C':
            console.log(`Novo salario ${salario + (salario * 0.20)}`);
            break;
    
        default:
            console.log('Plano não existente');
            break;
    }
}

salario('A', 1000)
salario('B', 1000)
salario('C', 1000)