const express = require('express');
const nunjucks = require('nunjucks');
const server = express();
const videos = require('./data');

server.use(express.static('public'));
server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', function (req, res) {
    const about = {
        avatar_url: 'foto-perfil.jpg',
        name: 'Rodrigo Santos',
        role: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        description: 'Aluno do Bootcamp LaunchBase da <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>',
        links: [
            { name: 'GitHub', url: 'https://github.com/imsantosrodrigo' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/imsantosrodrigo/' }
        ]
    };
    return res.render('about', { about });
});

server.get('/portifolio', function (req, res) {
    return res.render('portifolio', { items: videos });
});

server.get('/video', function (req, res) {
    const id = req.query.id;
    const video = videos.find(function (video) {
        return video.id == id;
    });
    if (!video) {
        return res.send('Vídeo não encontado.');
    }
    return res.render('video', { item: video });
});

server.listen(5000, function () {
    console.log('Servidor rodando.');
});