var orm = require("../config/orm.js");

// write ORM code
// see act 13.16

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) { // this is calling the tables 'burgers' from database
        cb(res);
      });
    }
}

module.exports = burger;
