function tabelaDeProgrecao(pontuacao) {
    let recorde = 0;
    let pior_jogo = 0;
    let melhor_desempenho = pontuacao[0];
    let pior_desempenho = pontuacao[0];
    let conclucao = []

    for (let i = 0; i < pontuacao.length; i++) {

        if(pontuacao[i] > melhor_desempenho){
            melhor_desempenho = pontuacao[i];
            recorde += 1;
        }

        if(pontuacao[i] < pior_desempenho){
            pior_desempenho = pontuacao[i];
            pior_jogo = i;
        }
    }

    conclucao.push(recorde);
    conclucao.push(pior_jogo + 1);

    return conclucao;
}

console.log(tabelaDeProgrecao([10, 20, 20, 8, 25, 3, 30, 1, 20, 10]))