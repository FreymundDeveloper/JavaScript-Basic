function verificarAno(ano) {
    if(ano % 4 == 0){
        return `${ano} é bisexto`;
    }
    else {
        return `${ano} não é bisexto`;
    }
}

console.log(verificarAno(2026));