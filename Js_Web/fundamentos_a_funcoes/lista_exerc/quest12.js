function fatorial(valor) {
    for (let i = valor; i > 1; i--) {
        valor = valor * (i - 1);
    }

    return valor;
}

console.log(fatorial(6));