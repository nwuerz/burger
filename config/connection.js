const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "local host",
    port: 3306,
    user: "root",
    password: "root",
    databse: "burgers_db"
});

connection.connect((err)=> {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
    }
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;