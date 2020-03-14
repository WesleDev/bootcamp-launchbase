const { date } = require('../../lib/utils');
const db = require('../../config/db');

module.exports = {
    index(callback) {
        db.query(`SELECT recipes.*, chefs.name AS chef_name FROM recipes 
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id) ORDER BY id`, function (err, results) {
            if (err) {
                throw `Database Error! ${err}`;
            }
            callback(results.rows);
        });
    },
    receitas(callback) {
        db.query(`SELECT recipes.*, chefs.name AS chef_name FROM recipes 
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id) ORDER BY id`, function (err, results) {
            if (err) {
                throw `Database Error! ${err}`;
            }
            callback(results.rows);
        });
    },
    receita(id, callback) {
        db.query(`SELECT recipes.*, chefs.name AS chef_name FROM recipes 
        LEFT JOIN chefs ON (chefs.id = recipes.chef_id) 
        WHERE recipes.id = $1`, [id], function (err, results) {
            if (err) {
                throw `Database Error! ${err}`;
            }
            callback(results.rows[0]);
        });
    },
    chefs(callback) {
        db.query(`SELECT chefs.*, count(recipes) AS total_recipes FROM chefs 
        LEFT JOIN recipes ON (chefs.id = recipes.chef_id) 
        GROUP BY chefs.id ORDER BY id`, function (err, results) {
            if (err) {
                throw `Database Error! ${err}`;
            }
            callback(results.rows);
        })
    },
    search(params) {
        const { filter, callback } = params;
        let query = '';
        let filterQuery = '';
        if (filter) {
            filterQuery = `WHERE recipes.title ILIKE '%${filter}%'`;
        }
        query = `SELECT recipes.*, chefs.name AS chef_name 
        FROM recipes LEFT JOIN chefs ON (recipes.chef_id = chefs.id) ${filterQuery}`;
        db.query(query, function (err, results) {
            if (err) {
                throw `Database Error! ${err}`;
            }
            callback(results.rows);
        });
    }
}