var connection = require("./connection.js");

var orm = {
    selectAll: function(input, col) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString[input, col], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },

    // insertOne: function(id, name, devoured) {
    //     var queryString = "INSERT INTO ?? VALUES ??";
    //     connection.query(queryString[id, name, devoured], function(err, res) {
    //         if (err) throw err;
    //         console.log(res);
    //     });
    // },

    // updateOne: function() {

    // }
}

module.exports = orm;
