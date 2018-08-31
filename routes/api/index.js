const router = require("express").Router();
const storyRoutes = require("./story");

// Story routes
router.use("/story", storyRoutes);

module.exports = router;
