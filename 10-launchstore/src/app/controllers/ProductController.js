// Importando a formatação de preço
const { formatPrice } = require('../../lib/utils');
// Importando o modelo Category
const Category = require('../models/Category');
// Importando o modelo Product
const Product = require('../models/Product');

module.exports = {
    create(req, res) {
        // Pegar categorias
        // Promise
        Category.all().then(function (results) {
            // Array de categorias que foi buscar no banco de dados
            const categories = results.rows;
            return res.render('products/create.njk', { categories });
        }).catch(function (err) {
            throw new Error(err);
        });
    },
    // Lógica de salvar
    // Async / Await
    async post(req, res) {
        // Validando se todos os campos estão preenchidos
        const keys = Object.keys(req.body);

        for (key of keys) {
            if (req.body[key] == '') {
                return res.send('Preencha todos os campos.');
            }
        }

        let results = await Product.create(req.body);
        const productId = results.rows[0].id;

        return res.redirect(`products/${productId}`);
    },
    // Editar Produto
    async edit(req, res) {
        let results = await Product.find(req.params.id);
        const product = results.rows[0];

        if (!product) {
            return res.send('Produto não foi encontrado.');
        }

        product.old_price = formatPrice(product.old_price);
        product.price = formatPrice(product.price);

        results = await Category.all();
        const categories = results.rows;

        return res.render('products/edit.njk', { product, categories });
    },
    async put(req, res) {
        // Validando se todos os campos estão preenchidos
        const keys = Object.keys(req.body);

        for (key of keys) {
            if (req.body[key] == '') {
                return res.send('Preencha todos os campos.');
            }
        }

        req.body.price = req.body.price.replace(/\D/g, '');

        if (req.body.old_price != req.body.price) {
            const oldProduct = await Product.find(req.body.id);
            req.body.old_price = oldProduct.rows[0].price;
        }

        await Product.update(req.body);

        return res.redirect(`/products/${req.body.id}/edit`);
    },
    async delete(req, res) {
        await Product.delete(req.body.id);

        return res.redirect('/products/create');
    }
}