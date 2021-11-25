const carrinho = [
    {nome: 'Caneta', qtne: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtne: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtne: 4, preco: 27.99, fragil: false},
    {nome: 'Lapis', qtne: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtne: 1, preco: 19.20, fragil: true},
]

const fragil = carrinho => carrinho.fragil === true
const quantidade_preco = el => el.qtne * el.preco
const media = (contador, el, i, array) => {
    if (i === array. length - 1) {
        return (contador + el) / array.length
    } else {
        return contador + el
    }
}

console.log('Parte 1:\n',carrinho.filter(fragil))
console.log('Parte 2: ',carrinho.filter(fragil).map(quantidade_preco))
console.log('Parte 3: ', carrinho.filter(fragil).map(quantidade_preco).reduce(media))