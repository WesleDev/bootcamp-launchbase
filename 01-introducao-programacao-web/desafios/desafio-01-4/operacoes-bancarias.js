// Operações bancárias 

const usuario = {
    nome: 'Mariana',
    transacoes: [],
    saldo: 0
};

// Adicionar transações
function criarTransacao(transacao) {
    usuario.transacoes.push(transacao);
    if (transacao.tipo === 'credito') {
        usuario.saldo = usuario.saldo + transacao.valor;
    } else {
        usuario.saldo = usuario.saldo - transacao.valor;
    }
}

// Relatórios
function getTransacaoMaisAltaPorTipo(tipo) {
    let maiorTransacao = 0;
    let maiorValor = 0;
    for (let transacao of usuario.transacoes) {
        if (transacao.tipo == tipo && transacao.valor > maiorValor) {
            maiorValor = transacao.valor;
            maiorTransacao = transacao;
        }
    }
    return maiorTransacao;
}

function getValorMedioTransacao() {
    let soma = 0;
    for (let transacao of usuario.transacoes) {
        soma += transacao.valor;
    }
    return soma / usuario.transacoes.length;
}

function getQuantiaTransacao() {
    let contar = {
        credito: 0,
        debito: 0
    };
    for (let transacao of usuario.transacoes) {
        if (transacao.tipo === 'credito') {
            contar.credito++;
        } else {
            contar.debito++;
        }
    }
    return contar;
}

console.log(`Saldo inicia de ${usuario.nome} é de R$ ${usuario.saldo}`);

criarTransacao({ tipo: 'credito', valor: 50 });
criarTransacao({ tipo: 'credito', valor: 120 });
criarTransacao({ tipo: 'debito', valor: 80 });
criarTransacao({ tipo: 'debito', valor: 30 });

console.log(`Saldo de ${usuario.nome} após as transações é de R$ ${usuario.saldo}`);
console.log('Valor médio das transações R$ ' + getValorMedioTransacao());
console.log(getQuantiaTransacao());
console.log(getTransacaoMaisAltaPorTipo('credito'));
console.log(getTransacaoMaisAltaPorTipo('debito'));