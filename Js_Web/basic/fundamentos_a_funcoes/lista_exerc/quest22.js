function taxa(mes_paga) {
    let valor_taxa = 100;

    for (let i = 0; i < mes_paga; i++) {
        if(mes_paga > 1){
            valor_taxa += valor_taxa * (5 * (i + 1) / 100);
        }
    }

    console.log(`Taxa de R$${valor_taxa.toFixed(2)}`);
}

taxa(11);
taxa(1);