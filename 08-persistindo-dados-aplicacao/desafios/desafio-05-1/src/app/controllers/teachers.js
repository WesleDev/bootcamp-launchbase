const { age, date, graduation } = require('../../lib/utils');
const Intl = require('intl');

module.exports = {
    index(req, res) {
        return res.render('teachers/index');
    },
    create(req, res) {
        return res.render('teachers/create');
    },
    post(req, res) {
        const keys = Object.keys(req.body);
        for (key of keys) {
            if (req.body[key] == '') {
                return res.send('Preencha todos os campos.');
            }
        }
        return;
    },
    show(req, res) {
        return;
    },
    edit(req, res) {
        return;
    },
    update(req, res) {
        const keys = Object.keys(req.body);
        for (key of keys) {
            if (req.body[key] == '') {
                return res.send('Preencha todos os campos.');
            }
        }
        return;
    },
    delete(req, res) {
        return;
    },
}