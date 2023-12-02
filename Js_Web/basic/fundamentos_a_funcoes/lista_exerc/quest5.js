function corretorDePontuacao(valor_recebido) {
    return `R$${(valor_recebido.toFixed(2)).toString().replace(".", ",")}`;
}

console.log(corretorDePontuacao(0.30000000000000004));