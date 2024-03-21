// Challenger One
const double = (value: number): number => value * 2
console.log(double(10))

// Challenger Two
const hello = (name: string = "People"): void => console.log("Ola, " + name)
hello()
hello("Anna")

// Challenger Three
const nums: number[] = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// Challenger Four
const numbers: number[] = [-3, 33, 38, 5]
let array: number[] = [55, 20]
array.push(...numbers)
console.log(array)

// Challenger Five
const notes: number[] = [8.5, 6.3, 9.4]
const [notes1, notes2, notes3] = notes
console.log(notes1, notes2, notes3)

const scientist: {firtName: string, experience: number} = {firtName: "Will", experience: 12}
const { firtName, experience } = scientist
console.log(firtName, experience)