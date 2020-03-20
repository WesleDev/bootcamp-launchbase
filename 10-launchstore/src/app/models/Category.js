// Importando o banco de dados
const db = require('../../config/db');

module.exports = {
    // Pega tudo do banco de dados
    all() {
        // db.query é uma Promisse
        return db.query('SELECT * from categories');
    }
}