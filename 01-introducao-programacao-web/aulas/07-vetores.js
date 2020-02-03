/* Criar um programa que calcula a média das notas entre os alunos e envia
mensagem do cálculo da média. Se a média for maior que 5 parabenizar a turma. */

const alunos = [
    {
        nome: 'Rodrigo',
        nota: 9.8
    },
    {
        nome: 'Maria',
        nota: 10
    },
    {
        nome: 'João',
        nota: 2
    }
];

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;

if (media > 5) {
    console.log(`A média foi de ${media}. Parabéns!`);
} else {
    console.log('A média é menor que 5');
}