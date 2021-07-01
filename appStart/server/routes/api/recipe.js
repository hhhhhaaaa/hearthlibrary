const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

// Matches with "/api/posts"
router.route("/").get(recipeController.findAll).post(recipeController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(recipeController.findById)
  .put(recipeController.update)
  .delete(recipeController.remove);

module.exports = router;
