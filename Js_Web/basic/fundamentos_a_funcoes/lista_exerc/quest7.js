function bhaskara(a, b, c) {
    let delta = (b ** 2) - (4 * a * c);
    let resultado = []

    if(delta < 0){
        return `Delta negativo`;
    }
    else{
        resultado.push(((b * -1) + Math.sqrt(delta)) / 2*a);
        resultado.push(((b * -1) - Math.sqrt(delta)) / 2*a);
    }

    return `X': ${resultado[0]}\nX'':${resultado[1]}\n`;
}

console.log(bhaskara(1, 12, -13));//funcional
console.log(bhaskara(3, -5, 12));//n funcional

