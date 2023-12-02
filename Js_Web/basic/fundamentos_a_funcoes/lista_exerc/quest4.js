function divicao(dividendo, divisor) {
    return `Div: ${Math.round(dividendo / divisor)}\nResto: ${dividendo % divisor}`
}

console.log(divicao(10, 3))