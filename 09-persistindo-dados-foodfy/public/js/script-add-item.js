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