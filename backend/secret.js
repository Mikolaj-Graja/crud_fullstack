const mysql = require("mysql");
const port = 3000;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todo"
})

module.exports = {connection, port};