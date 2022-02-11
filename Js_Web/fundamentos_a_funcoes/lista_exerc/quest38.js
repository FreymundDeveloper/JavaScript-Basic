function corretor(valor1, valor2) {
    let maior = undefined;
    let menor = undefined;

    if (valor1 < valor2) {
        menor = valor1;
        maior = valor2;

    } else {
        menor = valor2;
        maior = valor1;

    }

    while (menor <= maior) {
        console.log(menor);
        menor += 1;
    }
}

corretor(100, 0);