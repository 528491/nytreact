const router = require("express").Router();
const helloworldRoute = require("./helloworld");
const articlesRoute = require("./articles");

router.use("/helloworld", helloworldRoute);
router.use("/articles", articlesRoute);

module.exports = router;