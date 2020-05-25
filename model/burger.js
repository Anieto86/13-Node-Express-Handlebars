var orm = require("../config/orm.js");


var burger = {
    all: function(cb) {
      orm.all("burger", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cb) {
      orm.create("burger",function(res) {
        cb(res);
      });
    },
    update: function(cb) {
      orm.update("burger", function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burger_Controller.js).
  module.exports = burger;
  