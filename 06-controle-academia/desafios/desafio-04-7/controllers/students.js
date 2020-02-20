const fs = require('fs');
const data = require('../data.json');
const { age, date, grade } = require('../utils');
const Intl = require('intl');

// Listar
exports.index = function (req, res) {
    return res.render('students/index', { students: data.students });
}

// Create
exports.create = function (req, res) {
    return res.render('students/create');
}

// Post
exports.post = function (req, res) {
    const keys = Object.keys(req.body);
    for (key of keys) {
        if (req.body[key] == '') {
            return res.send('Preencha todos os campos.');
        }
    }
    let { avatar_url, name, birth, email, school_year, workload } = req.body;
    birth = Date.parse(birth);
    const id = Number(data.students.length + 1);
    data.students.push({
        id,
        avatar_url,
        name,
        birth,
        email,
        school_year,
        workload
    });
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
        if (err) {
            return res.send('Erro no arquivo de gravação');
        }
        return res.redirect('students');
    });
}

// Show
exports.show = function (req, res) {
    const { id } = req.params;
    const foundStudent = data.students.find(function (student) {
        return student.id == id;
    });
    if (!foundStudent) {
        return res.send('Estudante não foi encontrado.');
    }
    function age(timestamp) {
        const today = new Date();
        const birthDate = new Date(timestamp);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1;
        }
        return age;
    }
    const student = {
        ...foundStudent,
        grade: grade(foundStudent.school_year),
        birth: date(foundStudent.birth).birthDay
    }
    return res.render('students/show', { student });
}

// Edit
exports.edit = function (req, res) {
    const { id } = req.params;
    const foundStudent = data.students.find(function (student) {
        return student.id == id;
    });
    if (!foundStudent) {
        return res.send('Estudante não foi encontrado.');
    }
    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).iso
    }
    return res.render('students/edit', { student });
}

// Update
exports.update = function (req, res) {
    const { id } = req.body;
    let index = 0;
    const foundStudent = data.students.find(function (student, foundIndex) {
        if (id == student.id) {
            index = foundIndex;
            return true;
        }
    });
    if (!foundStudent) {
        return res.send('Estudante não foi encontrado.');
    }
    const student = {
        ...foundStudent,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }
    data.students[index] = student;
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
        if (err) {
            return res.send('Erro de escrita.');
        }
        return res.redirect(`/students/${id}`);
    });
}

// Delete
exports.delete = function (req, res) {
    const { id } = req.body;
    const filteredstudents = data.students.filter(function (student) {
        return student.id != id;
    });
    data.students = filteredstudents;
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
        if (err) {
            return res.send('Erro de escrita.');
        }
        return res.redirect('students');
    });
}