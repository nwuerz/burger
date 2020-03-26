const connection = require("./connection.js");

const orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ?";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(newBurger) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)"
        connection.query(queryString, [newBurger], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(burgerId, updatedBurger) {
        var queryString = "UPDATE burgers SET burger_name = ? where id = ?";
        connection.query(queryString, [updatedBurger, burgerId], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;