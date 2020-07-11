const mysql = require('mysql');
const port = process.env.port || 3009;

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'todo',
});

module.exports = { connection, port };
