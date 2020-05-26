//Dependencies
let express = require('express');
// Set Handlebars.
var exphbs = require("express-handlebars");
//Express
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


var PORT = process.env.PORT || 8000;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use(routes);


app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});