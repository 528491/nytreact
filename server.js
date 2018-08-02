var express = require("express");
//var bodyParser = require("body-parser");

var app = express();

//3001 chosen so as not to conflict with the port the react server will be listening on
var PORT = process.env.PORT || 3001;

//Routes will be defined here minimally, to get functionality up and running ASAP.
//Routes can then be defined in a more modular fashion after main functionality (implemented in react) is 
//implemented successfully
app.get("/helloworld", function(req, res){
    res.send("<h1>Hello World! Server is functioning properly!</h1>")
});

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });