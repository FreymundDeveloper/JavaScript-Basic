function fHigh(numbersStringList) {
    const arrayConversion = numbersStringList.split(/\s+/).map(Number);

    return Math.max(...arrayConversion);
}

const example = '3  25 10 15 8';
const result = fHigh(example);

console.log(`Higher number from the String: ${result}`);
