// Importando o express
// require chama o express pra dentro da const express
const express = require('express');

// Variável routes fica responsável pelas rotas
const routes = express.Router();

// Importando o ProductController
const ProductController = require('./app/controllers/ProductController');

// Rota para a página inicial
routes.get('/', function (req, res) {
    return res.render('layout.njk');
});

// Rota para a página de cadatro de produtos
routes.get('/products/create', ProductController.create);

// Rota para o post, salvar o cadastro do produto
routes.post('/products', ProductController.post);

// Rota para editar o produto
routes.get('/products/:id/edit', ProductController.edit);

// Rota para atualizar o produtor
routes.put('/products', ProductController.put);

// Rota para excluir o produtor
routes.delete('/products', ProductController.delete);

// Máscara para redirecionar para a página de cadatro de produtos - Atalho
routes.get('/ads/create', function (req, res) {
    return res.redirect('/products/create');
});

// Exportando as rotas
module.exports = routes;