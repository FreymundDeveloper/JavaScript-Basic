const returnNumero = (array) => array.filter(array => typeof array === "number")

console.log(returnNumero([1, "q", 4, "12"]))