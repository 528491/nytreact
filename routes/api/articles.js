const router = require("express").Router();

router.use("/test", function(req, res){
    res.send("<p>You are now in the articles route</p>");
});



module.exports = router;