const anoBissexto = (ano) => new Date(ano, 1, 29).getDate() === 29

console.log(anoBissexto(2024))