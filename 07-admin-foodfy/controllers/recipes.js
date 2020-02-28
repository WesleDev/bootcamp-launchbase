const fs = require('fs');
const data = require('../data.json');

// Index
exports.index = function (req, res) {
    return res.render('admin/recipes/index', { recipes: data.recipes });
}

// Create
exports.create = function (req, res) {
    return res.render('admin/recipes/create');
}

// Post
exports.post = function (req, res) {
    const keys = Object.keys(req.body);
    for (key of keys) {
        if (req.body[key] == '') {
            return res.send('Preencha todos os campos.');
        }
    }
    let { image, title, author, ingredients, preparation, information } = req.body;
    const id = Number(data.recipes.length + 1);
    data.recipes.push({
        id,
        image,
        title,
        author,
        ingredients,
        preparation,
        information
    });
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
        if (err) {
            return res.send('Erro no arquivo de gravação');
        }
        return res.redirect('recipes');
    });
}

// Show
exports.show = function (req, res) {
    const { id } = req.params;
    const foundRecipe = data.recipes.find(function (recipe) {
        return recipe.id == id;
    });
    if (!foundRecipe) {
        return res.send('Receita não foi encontrada.');
    }
    const recipe = {
        ...foundRecipe
    }
    return res.render('admin/recipes/show', { recipe });
}

// Edit
exports.edit = function (req, res) {
    const { id } = req.params;
    const foundRecipe = data.recipes.find(function (recipe) {
        return recipe.id == id;
    });
    if (!foundRecipe) {
        return res.send('Receita não foi encontrada');
    }
    const recipe = {
        ...foundRecipe
    }
    return res.render('admin/recipes/edit', { recipe });
}

// Put
exports.put = function (req, res) {
    const { id } = req.body;
    let index = 0;
    const foundRecipe = data.recipes.find(function (recipe, foundIndex) {
        if (id == recipe.id) {
            index = foundIndex;
            return true;
        }
    });
    if (!foundRecipe) {
        return res.send('Receita não foi encontrada');
    }
    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id)
    }
    data.recipes[index] = recipe;
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
        if (err) {
            return res.send('Erro de escrita.');
        }
        return res.redirect(`/admin/recipes/${id}`);
    });
}

// Delete
exports.delete = function (req, res) {
    const { id } = req.body;
    const filteredRecipes = data.recipes.filter(function (recipe) {
        return recipe.id != id;
    });
    data.recipes = filteredRecipes;
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
        if (err) {
            return res.send('Erro de escrita.');
        }
        return res.redirect('recipes');
    });
}