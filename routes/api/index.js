const router = require("express").Router();
const helloworldRoute = require("./helloworld");

router.use("/helloworld", helloworldRoute);

module.exports = router;