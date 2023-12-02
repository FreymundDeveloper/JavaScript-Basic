function multy(valor1, valor2) {

    if (Number.isInteger(valor1) && Number.isInteger(valor2)) {
        
        let cont = 0

        if(valor1 >= 0 && valor2 >= 0) {

            for (let i = 0; i < valor2; i++) {
                cont += valor1;
            }
        }

        return cont;
    }
    return "Numeroa inteiros obrigatorios"
}

console.log(multy(0, 4))