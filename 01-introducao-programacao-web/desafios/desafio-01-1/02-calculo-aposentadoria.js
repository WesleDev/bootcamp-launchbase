// Cálculo de aposentadoria

const nome = 'Marina';
const sexo = 'F';
const idade = 55;
const contribuicao = 30;

const somaIdadeContribuicao = idade + contribuicao;

if (contribuicao >= 35 && sexo == 'M' && somaIdadeContribuicao >= 95) {
    console.log(`${nome}, você pode se aposentar`);
} else if (contribuicao >= 30 && sexo == 'F' && somaIdadeContribuicao >= 85) {
    console.log(`${nome}, você pode se aposentar`);
} else {
    console.log(`${nome}, você ainda não pode se aposentar`);
}