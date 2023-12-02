function regimeSimples(capital_inicial, taxa_juros, tempo_aplicacao) {
    let valor_total_aplicação = capital_inicial

    for (let i = 0; i < tempo_aplicacao; i++) {
        valor_total_aplicação += (capital_inicial * (taxa_juros / 100));
    }

    return `Regime Simples: ${valor_total_aplicação}`;
}

function regimeComposto(capital_inicial, taxa_juros, tempo_aplicacao) {
    let valor_total_aplicação = capital_inicial

    for (let i = 0; i < tempo_aplicacao; i++) {
        valor_total_aplicação += (valor_total_aplicação * (taxa_juros / 100));
    }

    return `Regime Composto: ${valor_total_aplicação}`;
}

console.log(regimeSimples(100, 1, 2));
console.log(regimeComposto(100, 1, 2));