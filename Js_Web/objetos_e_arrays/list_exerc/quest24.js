const palavras = (indicador, frase) => [...frase].filter(correspondente => correspondente === indicador).length

console.log(palavras("o", "Capitalismo gostoso é isso"))