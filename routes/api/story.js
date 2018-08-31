const router = require("express").Router();
const storyController = require("../../controllers/storyController");

// Matches with "/api/story"
router.route("/")
  .get(storyController.findAll)
  .post(storyController.addFavorite);

// Matches with "/api/story/:id"
router.route("/:id")
  .delete(storyController.delFavorite);

  module.exports = router;
