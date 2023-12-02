function media(codigo, notas) {
    media_final = 0;

    while (codigo > -1) { //N sei o pq do while, questão meio confusa
        media_final = (notas[0] * 0.30) + (notas[1] * 0.30) + (notas[2] * 0.40)
        codigo = -1
    }

    if (media_final >= 5) {
        console.log(`Notas: ${notas[0].toFixed(2)} - ${notas[1].toFixed(2)} - ${notas[2].toFixed(2)}\nMedia: ${media_final.toFixed(2)}\nAprovado\n`);
    } else {
        console.log(`Notas: ${notas[0].toFixed(2)} - ${notas[1].toFixed(2)} - ${notas[2].toFixed(2)}\nMedia: ${media_final.toFixed(2)}\nReprovado\n`);
    }
}

media(1, [2.0, 5.0, 10.0]);
media(1, [2.0, 3.0, 8.0]);