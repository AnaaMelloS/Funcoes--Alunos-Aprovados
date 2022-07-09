const alunos = [
    {
        nome: 'Ana',
        nota: '7',
        turma: '1A',
    },
    {
        nome: 'João',
        nota: '9',
        turma: '2B',
    },
    {
        nome:'Sofia',
        nota: '4',
        turma: '2B'
    },        
];

function alunosAprovados(alunos, media) {
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        let { nota, nome } = alunos[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));
