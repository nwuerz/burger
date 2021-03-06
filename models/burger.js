const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(newBurger, cb) {
        orm.insertOne("burgers", newBurger, function(res) {
            cb(res);
        });
    },
    updateOne: function(burgerId, updatedBurger, cb) {
        orm.updateOne("burgers", burgerId, updatedBurger, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;