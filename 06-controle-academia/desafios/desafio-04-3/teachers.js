const fs = require('fs');
const data = require('./data.json');

exports.post = function (req, res) {
    const keys = Object.keys(req.body);
    for (key of keys) {
        if (req.body[key] == '') {
            return res.send('Preencha todos os campos.');
        }
    }
    let { avatar_url, name, birth, degree, type, occupation } = req.body;
    birth = Date.parse(birth);
    const created_at = Date.now();
    const id = Number(data.teachers.length + 1);
    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        degree,
        type,
        occupation,
        created_at
    });
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
        if (err) {
            return res.send('Erro no arquivo de gravação');
        }
        return res.redirect('teachers');
    });
}