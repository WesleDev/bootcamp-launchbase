// Soma de despesas e receitas

const usuarios = [
    {
        nome: 'Salvio',
        receitas: [115.3, 48.7, 98.3, 14.5],    // 276,8    POSITIVO 158,1
        despesas: [85.3, 13.5, 19.9]            // 118,7
    },
    {
        nome: 'Marcio',
        receitas: [24.6, 214.3, 45.3],          // 284,2    NEGATIVO -33,2
        despesas: [185.3, 12.1, 120.0]          // 317,4
    },
    {
        nome: 'Lucia',
        receitas: [9.8, 120.3, 340.2, 45.3],    // 515,6    POSITIVO 35,5
        despesas: [450.2, 29.9]                 // 480,1
    }
];

function somaNumeros(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i];
    }
    return soma;
}

function calculaSaldo(receitas, despesas) {
    const totalReceitas = somaNumeros(receitas);
    const totalDespesas = somaNumeros(despesas);
    return totalReceitas - totalDespesas;
}

for (let i = 0; i < usuarios.length; i++) {
    const saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas);
    if (saldo >= 0) {
        console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo}`);
    } else {
        console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo}`);
    }
}