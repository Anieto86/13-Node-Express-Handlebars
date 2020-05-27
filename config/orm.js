
//2 setting orms, stole the 12 -ORM exercise 

var connection = require("../config/connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
   SelectAll: async function(table, cb) {
    var queryString = "SELECT * FROM ??";
   return await  connection.query(queryString, [table,], function(err, result) {
      if (err) throw err;
      cb(result);
    
    });
  },
  insertOne: async function( table, insert) {
    var queryString = "INSET INTO ?? VALUE ??";
    console.log(queryString);
    return await connection.query(queryString, [table, insert], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne:async function(table, insert) {
    var queryString = "INSET INTO ?? VALUE ??";
    return await   connection.query(
      queryString, [table, insert],function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;

