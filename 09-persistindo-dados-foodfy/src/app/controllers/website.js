const Website = require('../models/Website');

module.exports = {
    index(req, res) {
        Website.index(function (recipes) {
            res.render('website/home', { recipes });
        });
    },
    sobre(req, res) {
        return res.render('website/sobre');
    },
    receitas(req, res) {
        Website.receitas(function (recipes) {
            res.render('website/receitas', { recipes });
        });
    },
    receita(req, res) {
        Website.receita(req.params.id, function (recipe) {
            if (!recipe) {
                return res.send('Receita não foi encontrada.');
            }
            return res.render('website/receita', { recipe });
        });
    },
    chefs(req, res) {
        Website.chefs(function (chefs) {
            res.render('website/chefs', { chefs });
        });
    },
    search(req, res) {
        let { filter, page } = req.query;
        page = 1;
        const params = {
            filter,
            page,
            callback(recipes) {
                const pagination = {
                    page
                }
                return res.render('website/search', { recipes, pagination, filter });
            }
        }
        Website.search(params);
    }
}