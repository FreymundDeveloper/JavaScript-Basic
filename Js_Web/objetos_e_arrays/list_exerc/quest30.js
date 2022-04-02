function melhorNota(estudantes) {
    const media = array => array.reduce((total, atual) => total + atual, 0) / array.length
    const alunos_medias = Object.entries(estudantes).map(aluno => {const chave = 0, valor = 1 
        return {nome: aluno[chave], media: media(aluno[valor])}
    })
    const alunos_rank = alunos_medias.sort((aluno1, aluno2) => aluno2.media - aluno1.media)
    return alunos_rank[0]
}

console.log(melhorNota({Joao: [8, 7.6, 8.9, 6], Mariana: [9, 6.6, 7.9, 8], Carla: [7, 7, 8, 9] }))