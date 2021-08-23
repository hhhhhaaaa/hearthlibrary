const router = require("express").Router();
const apiRoutes = require("./api");
const generalRoutes = require("./general");

router.use("/api", apiRoutes);
router.use("/", generalRoutes);

module.exports = router;
