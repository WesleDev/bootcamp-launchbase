const { age, date, grade } = require('../../lib/utils');
const Intl = require('intl');
const Student = require('../models/Student');

module.exports = {
    index(req, res) {
        Student.all(function (students) {
            return res.render('students/index', { students });
        });
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
        Student.create(req.body, function (student) {
            return res.redirect(`/students/${student.id}`);
        });
    },
    show(req, res) {
        Student.find(req.params.id, function (student) {
            if (!student) {
                return res.send('Estudante não foi encontrado.');
            }
            student.grade = grade(student.school_year);
            student.birth_date = date(student.birth_date).birthDay;
            return res.render('students/show', { student });
        });
    },
    edit(req, res) {
        Student.find(req.params.id, function (student) {
            if (!student) {
                return res.send('Estudante não foi encontrado.');
            }
            student.birth_date = date(student.birth_date).iso;
            return res.render('students/edit', { student });
        });
    },
    update(req, res) {
        const keys = Object.keys(req.body);
        for (key of keys) {
            if (req.body[key] == '') {
                return res.send('Preencha todos os campos.');
            }
        }
        Student.update(req.body, function () {
            return res.redirect(`/students/${req.body.id}`);
        });
    },
    delete(req, res) {
        Student.delete(req.body.id, function () {
            return res.redirect('/students');
        });
    },
}