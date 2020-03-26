const connection = require("./connection.js");

const orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ?;";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(newBurger, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false);"
        connection.query(queryString, [newBurger], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(burgerId, updatedBurger, cb) {
        var queryString = "UPDATE burgers SET burger_name = ? where id = ?;";
        connection.query(queryString, [updatedBurger, burgerId], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;