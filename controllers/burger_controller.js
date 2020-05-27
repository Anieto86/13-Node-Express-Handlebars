let express = require("express");

let router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../model/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.SelectAll(function(data) {
      var burgerObject = {
        burger: data // remember the datahere is called burger
      };
      console.log("this is the burger object")
      console.log(burgerObject);
      res.render("index", burgerObject);
    });
  });

  router.post("/api/burger", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result){
    // Send back the ID of the new quote
      res.json ({id:result.insertId})
    });
  });
  

  router.put("/api/burger/:id",function(req,res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne(
      {
        burger_name: req.body.burger_name
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });


  router.delete("/api/burger/:id",function(req,res){
    burger.delete(req.params.id ,  function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});


  module.exports = router;