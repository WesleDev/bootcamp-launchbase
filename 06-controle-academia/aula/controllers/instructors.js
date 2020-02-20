const fs = require('fs');
const data = require('../data.json');
const { age, date } = require('../utils');
const Intl = require('intl');

// Index
exports.index = function (req, res) {
    return res.render('instructors/index', { instructors: data.instructors });
}

// Create
exports.create = function (req, res) {
    return res.render('instructors/create');
}

// Post
exports.post = function (req, res) {
    const keys = Object.keys(req.body);
    for (key of keys) {
        if (req.body[key] == '') {
            return res.send('Preencha todos os campos.');
        }
    }
    let { avatar_url, birth, name, services, gender } = req.body;
    birth = Date.parse(birth);
    const created_at = Date.now();
    const id = Number(data.instructors.length + 1);
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        services,
        gender,
        created_at
    });
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
        if (err) {
            return res.send('Erro no arquivo de gravação');
        }
        return res.redirect('instructors');
    });
}

// Show
exports.show = function (req, res) {
    const { id } = req.params;
    const foundInstructor = data.instructors.find(function (instructor) {
        return instructor.id == id;
    });
    if (!foundInstructor) {
        return res.send('Instrutor não foi encontrado.');
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
    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(','),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundInstructor.created_at)
    }
    return res.render('instructors/show', { instructor });
}

// Edit
exports.edit = function (req, res) {
    const { id } = req.params;
    const foundInstructor = data.instructors.find(function (instructor) {
        return instructor.id == id;
    });
    if (!foundInstructor) {
        return res.send('Instrutor não foi encontrado');
    }
    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth).iso
    }
    return res.render('instructors/edit', { instructor });
}

// Put
exports.put = function (req, res) {
    const { id } = req.body;
    let index = 0;
    const foundInstructor = data.instructors.find(function (instructor, foundIndex) {
        if (id == instructor.id) {
            index = foundIndex;
            return true;
        }
    });
    if (!foundInstructor) {
        return res.send('Instrutor não foi encontrado');
    }
    const instructor = {
        ...foundInstructor,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }
    data.instructors[index] = instructor;
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
        if (err) {
            return res.send('Erro de escrita.');
        }
        return res.redirect(`/instructors/${id}`);
    });
}

// Delete
exports.delete = function (req, res) {
    const { id } = req.body;
    const filteredInstructors = data.instructors.filter(function (instructor) {
        return instructor.id != id;
    });
    data.instructors = filteredInstructors;
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
        if (err) {
            return res.send('Erro de escrita.');
        }
        return res.redirect('instructors');
    });
}