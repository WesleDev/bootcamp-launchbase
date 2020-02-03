/* Criar um programa que calcula a média das notas entre os alunos e envia 
mensagem do cálculo da média. Se a média for maior que 5 parabenizar a turma. */

const aluno01 = {
    nome: 'Rodrigo',
    nota: 9.8
};

const aluno02 = {
    nome: 'Maria',
    nota: 10
};

const aluno03 = {
    nome: 'João',
    nota: 2
};

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3;

if (media > 5) {
    console.log(`A média foi de ${media}. Parabéns!`);
} else {
    console.log('A média é menor que 5');
}