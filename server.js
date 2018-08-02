const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const Article = require('./models/Article');


//Will connect to mongoose in this single file as well - goal is to get an "mvp"
//up and running before refactoring
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/nytreact";
mongoose.connect(MONGODB_URI);

const app = express();

//3001 chosen so as not to conflict with the port the react server will be listening on
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'nytreact-client/build')));

//Routes will be defined here minimally, to get functionality up and running ASAP.
//Routes can then be defined in a more modular fashion after main functionality (implemented in react) is 
//implemented successfully
app.get("/helloworld", function(req, res){
    res.send("<h1>Hello World! Server is functioning properly!</h1>")
});

app.get("/api/articles", function(req, res){

});

//Catch-all route that is meant to serve the express app
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "/nytreact-client/build/index.html"));
});

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });