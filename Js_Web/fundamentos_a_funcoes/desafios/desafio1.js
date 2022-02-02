function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`É o ${this.nome}`)
    }
}

const t1 = new Pessoa('L')
t1.falar()