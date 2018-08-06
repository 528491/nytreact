const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const Article = require('./models/Article');
const routes = require("./routes");
const router = require("express").Router()


//Will connect to mongoose in this single file as well - goal is to get an "mvp"
//up and running before refactoring
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/nytreact";
mongoose.connect(MONGODB_URI);

const app = express();

//3001 chosen so as not to conflict with the port the react server will be listening on
const PORT = process.env.PORT || 3001;

app.use(routes);

/*
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/nytreact-client/build/index.html"));
});
*/

app.use(express.static("nytreact-client/build")); //If no other routes are hit, serve the react client


app.get("*", function(req, res){
    //app.use(express.static("nytreact-client/build")); //If no other routes are hit, serve the react client
    res.sendFile(path.join(__dirname, "nytreact-client/build/index.html"));
    //The problem with sending only index.html, which does work, is that none of the javascript loads.
});



app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });