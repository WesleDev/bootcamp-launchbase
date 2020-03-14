const pratos = document.querySelectorAll('.prato');
for (let i = 0; i < pratos.length; i++) {
    pratos[i].addEventListener('click', function () {
        window.location.href = `/website/receita/${i + 1}`
    });
}

const botaoEsconder = document.querySelectorAll(".botao-esconder");
for (let i = 0; i < botaoEsconder.length; i++) {
    botaoEsconder[i].addEventListener('click', function () {
        document.querySelector('.conteudo' + i).classList.toggle('esconder-conteudo');
        if (document.querySelector('.conteudo' + i).classList.contains('esconder-conteudo')) {
            botaoEsconder[i].innerHTML = 'Mostrar';
        } else {
            botaoEsconder[i].innerHTML = 'Esconder';
        }
    })
}