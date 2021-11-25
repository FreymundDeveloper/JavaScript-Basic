function somar(a, b){
    return a + b

}

function calcular(a){
    return function(b){
        return function(fn){
            return fn(a, b)
        }
    }
}

const resposta = calcular(1)(1)(somar)
console.log(resposta)