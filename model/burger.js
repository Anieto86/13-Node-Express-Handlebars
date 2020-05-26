var orm = require("../config/orm.js");


var burger = {
    SelectAll: function(cb) {
      orm.SelectAll("burger", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cb) {
      orm.insertOne("burger",function(res) {
        cb(res);
      });
    },
    updateOne: function(cb) {
      orm.updateOne("burger", function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burger_Controller.js).
  module.exports = burger;
  