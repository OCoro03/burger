// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
//Just to test if all my functions are coming or not, console log orm
console.log(orm);


var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb){
    orm.delete("burgers", condition, function(res){
      cb(res);
    })
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
