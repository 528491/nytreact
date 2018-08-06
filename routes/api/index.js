const express = require("express");
const router = require("express").Router();
const helloworldRoute = require("./helloworld");
const articlesRoute = require("./articles");
const path = require("path");

router.use("/helloworld", helloworldRoute);
router.use("/articles", articlesRoute);

router.use(express.static("../../nytreact-client/build"));
router.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../../nytreact-client/build/index.html"));
});

module.exports = router;