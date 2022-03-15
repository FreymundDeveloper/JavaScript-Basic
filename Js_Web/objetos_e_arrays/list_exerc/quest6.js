function inverso(valor) {
    const tipo = typeof(valor)

    switch (tipo) {
        case "boolean":

            switch (valor) {
                case true:
                    console.log(false)
                    break;

                default:
                    console.log(true)
                    break;
            }
            break;
            
        case "number":
            console.log(`${valor * -1}`)
            break;

        default:
            console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`)
            break;
    }
}

inverso(true)
inverso(-1)
inverso("olá")