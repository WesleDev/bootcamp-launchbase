const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

const cursos = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server
});

server.get('/', function (req, res) {
    return res.render('courses', { items: cursos });
});

server.get('/about', function (req, res) {
    const sobre = {
        titulo: 'Rocketseat',
        logo: 'logo.svg',
        descricao: [
            'As melhores tecnologias em programação, direto ao ponto e do jeito certo.',
            'No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.',
        ],
        lista: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'Node.js'],
        links: [
            { nome: 'Facebook', url: 'https://www.facebook.com/rocketseat' },
            { nome: 'Instagram', url: 'https://www.instagram.com/rocketseat_oficial/' },
            { nome: 'Twitter', url: 'https://twitter.com/rocketseat' },
            { nome: 'YouTube', url: 'https://www.youtube.com/rocketseat' }
        ]
    };
    return res.render('about', { sobre });
});

server.get('/not-found', function (req, res) {
    return res.render('not-found');
});

// Erro 404
server.use(function (req, res) {
    res.status(404).render('not-found');
});

server.listen(5000, function () {
    console.log('Servidor rodando.')
});