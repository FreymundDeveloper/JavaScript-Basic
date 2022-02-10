const str1 = 'Batatea'
const str2 = 'baetata'

let verif = false;

for (let i = 0; i < Math.round((str1.length + str2.length) / 2); i++) {
    verif = str2.toLowerCase().includes(str1[i]);
    verif = str1.toLowerCase().includes(str2[i]);
}

console.log(verif);