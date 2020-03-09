const { age, date, grade } = require('../../lib/utils');
const Intl = require('intl');

module.exports = {
    index(req, res) {
        return res.render('students/index');
    },
    create(req, res) {
        return res.render('students/create');
    },
    post(req, res) {
        const keys = Object.keys(req.body);
        for (key of keys) {
            if (req.body[key] == '') {
                return res.send('Preencha todos os campos.');
            }
        }
        let { avatar_url, name, birth, email, school_year, workload } = req.body;
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
        let { avatar_url, name, birth, email, school_year, workload } = req.body;
        return;
    },
    delete(req, res) {
        return;
    },
}