const despesas = array => array.reduce((total, valor_atual) => total + valor_atual.preco, 0)

console.log(despesas([
            {nome: "Jornal online", categoria: "Informação", preco: 89.99},
            {nome: "Cinema", categoria: "Entretenimento", preco: 150}
            ]))