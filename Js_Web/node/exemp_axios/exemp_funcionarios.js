const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)


    let menorSalario = `${funcionarios[0].nome} ${funcionarios[0].sobrenome}, Salario de R$ ${funcionarios[0].salario}`
    let menorSalarioVerif = 5000
    for (let i = 0; i < funcionarios.length; i++) {
        if(funcionarios[i].genero == 'F' && funcionarios[i].pais == 'China'){
            if(funcionarios[i].salario < menorSalarioVerif)
            menorSalario = `${funcionarios[i].nome} ${funcionarios[i].sobrenome}, Salario de R$ ${funcionarios[i].salario}`
        }
    }
    console.log(menorSalario)

    //ou: 

    const chineses = f => f.pais === 'China'
    const mulheres = f => f.genero === 'F'
    const menor_Salario = (func, funcAtual) => {return func.salario < funcAtual.salario ? func : funcAtual}

    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menor_Salario)
    console.log(func)
})