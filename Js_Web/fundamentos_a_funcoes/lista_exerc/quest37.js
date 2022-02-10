function aritmetica(n, a1, r) {
    for (let i = 0; i < n; i++) {
        a1 = a1 + r
    }
    return a1;
}

function geografica(n, a1, r) {
    for (let i = 0; i < n; i++) {
        a1 = a1 * r
    }
    return a1;
}

console.log(`F1: ${aritmetica(3, 2, 4)}\nF2: ${geografica(3, 2, 4)}`);