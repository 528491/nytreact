const router = require("express").Router();

router.get("/", function(req, res){
    res.send("<p>You have successfully hit the /api/articles get route</p>");
});

module.exports = router;