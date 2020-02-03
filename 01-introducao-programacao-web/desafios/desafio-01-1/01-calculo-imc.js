// Cálculo de IMC

const nome = 'José';
const peso = 86;
const altura = 1.79;
const sexo = 'M';

const imc = peso / (altura * altura);
console.log(`Seu IMC é de ${imc}`);

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`);
} else {
    console.log(`${nome} você não está acima do peso`);
}