const config = require('../knexfile.js');
const knex = require('knex')(config);

module.exports = knex;

/*var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
        user: 'root',
        password: '',
        database: 'back-laravel'
});

connection.connect(function (err) {
    // connection.end();
    if (!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    }
});

module.exports = connection;*/

