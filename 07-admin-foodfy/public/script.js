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

const ingredients = document.querySelector("#ingredients");
const fieldContainerIngredient = document.querySelectorAll(".ingredient");
document.querySelector(".add-ingredient").addEventListener("click", function () {
    const newField = fieldContainerIngredient[fieldContainerIngredient.length - 1].cloneNode(true);
    if (newField.children[0].value == "") {
        return false;
    }
    newField.children[0].value = "";
    ingredients.appendChild(newField);
});

const preparations = document.querySelector("#preparations");
const fieldContainerPreparation = document.querySelectorAll(".preparation");
document.querySelector(".add-preparation").addEventListener("click", function () {
    const newField = fieldContainerPreparation[fieldContainerPreparation.length - 1].cloneNode(true);
    if (newField.children[0].value == "") {
        return false;
    }
    newField.children[0].value = "";
    preparations.appendChild(newField);
});