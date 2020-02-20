const fs = require('fs');
const data = require('./data.json');
const { age, date, graduation } = require('./utils');
const Intl = require('intl');

// Show
exports.show = function (req, res) {
    const { id } = req.params;
    const foundTeacher = data.teachers.find(function (teacher) {
        return teacher.id == id;
    });
    if (!foundTeacher) {
        return res.send('Professor não foi encontrado.');
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
    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        graduation: graduation(foundTeacher.degree),
        occupations: foundTeacher.occupations.split(','),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
    }
    return res.render('teachers/show', { teacher });
}

// Create
exports.post = function (req, res) {
    const keys = Object.keys(req.body);
    for (key of keys) {
        if (req.body[key] == '') {
            return res.send('Preencha todos os campos.');
        }
    }
    let { avatar_url, name, birth, degree, type, occupations } = req.body;
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
        occupations,
        created_at
    });
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
        if (err) {
            return res.send('Erro no arquivo de gravação');
        }
        return res.redirect('teachers');
    });
}

// Edit
exports.edit = function (req, res) {
    const { id } = req.params;
    const foundTeacher = data.teachers.find(function (teacher) {
        return teacher.id == id;
    });
    if (!foundTeacher) {
        return res.send('Professor não foi encontrado');
    }
    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }
    return res.render('teachers/edit', { teacher });
}

// Update
exports.update = function (req, res) {
    const { id } = req.body;
    let index = 0;
    const foundTeacher = data.teachers.find(function (teacher, foundIndex) {
        if (id == teacher.id) {
            index = foundIndex;
            return true;
        }
    });
    if (!foundTeacher) {
        return res.send('Professor não foi encontrado');
    }
    const teacher = {
        ...foundTeacher,
        ...req.body,
        birth: Date.parse(req.body.birth),
        // id: Number(id)
        id: Number(req.body.id)
    }
    data.teachers[index] = teacher;
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
        if (err) {
            return res.send('Erro de escrita.');
        }
        return res.redirect(`/teachers/${id}`);
    });
}

// Delete
exports.delete = function (req, res) {
    const { id } = req.body;
    const filteredTeachers = data.teachers.filter(function (teacher) {
        return teacher.id != id;
    });
    data.teachers = filteredTeachers;
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
        if (err) {
            return res.send('Erro de escrita.');
        }
        return res.redirect('teachers');
    });
}