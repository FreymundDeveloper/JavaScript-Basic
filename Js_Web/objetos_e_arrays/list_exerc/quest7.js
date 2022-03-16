const inclusiva = (numero, minimo, maximo, inclusivo = false) => 
inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo //? = "if" --- : = "else" --- (+/-)

console.log(inclusiva(10, 10, 100, true))