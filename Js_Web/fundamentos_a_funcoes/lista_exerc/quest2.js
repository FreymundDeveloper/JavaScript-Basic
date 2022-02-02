function verificarTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        console.log(`O triangulo é equilátero`);
    } else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
        console.log(`O triangulo é escaleno`);
    } else {
        console.log(`O triangulo é isósceles`);
    }
}

verificarTriangulo(100, 10, 100);
verificarTriangulo(10, 10, 10);
verificarTriangulo(100, 11, 10);