let inputResultado = document.querySelector("#inputDisplayResultado");
let textAreaHistoria = document.querySelector("#textAreaHistorico");

let calculo = {
    valorSalvo: null,
    funcaoParaCalcular: null
};

window.addEventListener("load", function(){
    atribuirEventos();
})

function atribuirEventos() {
    document.querySelector("#btnLimpar").addEventListener("click", limparDados);
    document.querySelector("#btnPonto").addEventListener("click", clicarPonto);
    document.querySelector("#btnResultado").addEventListener("click", clicarResultado);

    let numeros = document.querySelectorAll(".btn-numero");
    let operadores = document.querySelectorAll(".btn-operador");

    for (let numero of numeros){
        numero.addEventListener("click", clicarNumero);
    }

    for (let operador of operadores){
        operador.addEventListener("click", clicarOperador)
    }
}

function clicarNumero(){
    if (isNaN(inputResultado.value)) {
        adicionarHistorico(inputResultado.value);
        inputResultado.value = event.target.textContent;
    }else{
        if (inputResultado.value !== "0." && inputResultado.value == 0) {
            inputResultado.value = event.target.textContent;
        }else{
            inputResultado.value += event.target.textContent;
        }
    }
}

function somarValores(valor1, valor2) {
    return valor1 + valor2;
}

function subtrairValores(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicarValores(valor1, valor2) {
    return valor1 * valor2;
}

function dividirValores(valor1, valor2) {
    switch (valor2) {
        case 0:
            bloquearBotoes(true);
            return "Erro, divisão por 0!";
    
        default:
            return valor1 / valor2;
    }
    
}

function limparDados(){
    inputResultado.value = "";
    adicionarHistorico("---");
    calculo.valorSalvo = null;
    calculo.funcaoParaCalcular = null;
    bloquearBotoes(false);
}

function bloquearBotoes(bloqueio){
    let botoes = document.querySelectorAll(".btn");

    for (let botao of botoes){
        botao.disabled = bloqueio;
    }
    document.querySelector("#btnLimpar").disabled = false;
}

function clicarPonto(){
    if(isNaN(inputResultado.value)){
        adicionarHistorico(inputResultado.value);
    }

    if (inputResultado.value == "" || isNaN(inputResultado.value)){
        inputResultado.value = "0.";
    }else if (!inputResultado.value.includes(".")) {
        inputResultado.value = inputResultado.value + ".";
    }
}

function clicarOperador(){
    if(!isNaN(inputResultado.value)) {
        if (calculo.valorSalvo == null || calculo.funcaoParaCalcular == null){
            calculo.valorSalvo = Number(inputResultado.value);
        }else if (calculo.funcaoParaCalcular != null){
            calculo.valorSalvo = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));
        }
        adicionarHistorico(calculo.valorSalvo);
    }
    let operador = event.target.textContent;
    atribuirOperacao(operador);
    inputResultado.value = operador;
}

function atribuirOperacao(operador){
    if (operador == "+"){
        calculo.funcaoParaCalcular = somarValores;
    }else if (operador == "-"){
        calculo.funcaoParaCalcular = subtrairValores;
    }else if (operador == "*"){
        calculo.funcaoParaCalcular = multiplicarValores;
    }else{
        calculo.funcaoParaCalcular = dividirValores;
    }
}

function clicarResultado() {
    if (!isNaN(inputResultado.value) && calculo.funcaoParaCalcular != null) {
        let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));

        adicionarHistorico(inputResultado.value + "\n= " + resultado);
        inputResultado.value = resultado;
        calculo.valorSalvo = resultado;
        calculo.funcaoParaCalcular = null;
    }
}

function adicionarHistorico(valor){
    textAreaHistorico.textContent += valor + "\n";
    textAreaHistorico.scrollTop = textAreaHistorico.scrollHeight;
}