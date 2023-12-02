const inclue = (possui, array) => array.filter(verif => verif.includes(possui))

console.log(inclue("pro", ["programação", "mobile", "profissional", "proPlayer", "vida"]))