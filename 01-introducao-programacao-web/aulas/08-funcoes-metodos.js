/* Criar um programa que calcula a média das turmas de alunos e envia 
mensagem do cálculo da média. Se a média for maior que 5 parabenizar a turma. */

const alunosDaTurmaA = [
    {
        nome: 'Rodrigo',
        nota: 3.8
    },
    {
        nome: 'Maria',
        nota: 5
    },
    {
        nome: 'João',
        nota: 2
    }
];

const alunosDaTurmaB = [
    {
        nome: 'Júlia',
        nota: 10
    },
    {
        nome: 'Alberto',
        nota: 5
    },
    {
        nome: 'Roberta',
        nota: 8
    }
];

// Função para calcular a média dos alunos
function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
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