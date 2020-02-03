/* Criar um programa que calcula a média das turmas de alunos e envia
mensagem do cálculo da média. Se a média for maior que 5 parabenizar a turma. */

const alunosDaTurmaA = [
    {
        nome: 'Rodrigo',
        nota: 1.8
    },
    {
        nome: 'Maria',
        nota: 10
    },
    {
        nome: 'João',
        nota: 2
    },
    {
        nome: 'Raquel',
        nota: 10
    }
];

const alunosDaTurmaB = [
    {
        nome: 'Júlia',
        nota: 10
    },
    {
        nome: 'Alberto',
        nota: 10
    },
    {
        nome: 'Roberta',
        nota: 5
    },
    {
        nome: 'Marcos',
        nota: 0
    }
];

// Função para calcular a média dos alunos
function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota;
    }
    const media = soma / alunos.length;
    return media;
}

const media1 = calculaMedia(alunosDaTurmaA);
const media2 = calculaMedia(alunosDaTurmaB);

// Recebe a média da função calculaMedia
function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns!`);
    } else {
        console.log(`A média da ${turma} é menor que 5`);
    }
}

enviaMensagem(media1, 'turma A');
enviaMensagem(media2, 'turma B');

// Marcar o aluno como reprovado se a nota for menor que 5 e envia uma mensagem.
function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
        aluno.reprovado = true;
    }
}

marcarComoReprovado(alunosDaTurmaA);

function enviarMensagemRepovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} está reprovado`);
    }
}

function alunosRepovados(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviarMensagemRepovado(aluno);
    }
}

alunosRepovados(alunosDaTurmaA);
alunosRepovados(alunosDaTurmaB);