const router = require("express").Router();
const recipeRoutes = require("./recipe");

// Post routes
router.use("/recipe", recipeRoutes);

module.exports = router;
