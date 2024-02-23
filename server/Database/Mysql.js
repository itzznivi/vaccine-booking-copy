const mysql = require("mysql2");

const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nivi",
    database: "vaccine"
})

module.exports = db;