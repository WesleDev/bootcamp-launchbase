const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const receitas = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', function (req, res) {
    return res.render('home', { items: receitas });
});

server.get('/sobre', function (req, res) {
    return res.render('sobre');
});

server.get('/receitas', function (req, res) {
    return res.render('receitas', { items: receitas });
});

server.get('/detalhe', function (req, res) {
    return res.render('detalhe');
});

server.get("/receita/:index", function (req, res) {
    const receitaId = req.params.index;
    return res.render("receita", { item: receitas[receitaId] })
});

server.listen(5000, function () {
    console.log('Servidor rodando na porta 5000');
});