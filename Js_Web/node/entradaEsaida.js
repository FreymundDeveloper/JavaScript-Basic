const anonimo = process.argv.indexOf('-a') !== -1

if (anonimo) {
    process.stdout.write('Sai Anonimo\n')
    process.exit()
} else {
    process.stdout.write('Nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fora ${nome}\n`)
        process.exit()
    })
}