const router = require("express").Router();

router.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
});

/*
router.use(function(req, res){
    res.send("<h1>Hello World!</h1>");
});
*/

module.exports = router;