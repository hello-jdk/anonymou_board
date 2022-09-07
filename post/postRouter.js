const router = require("express").Router();
const postController = require("./postController");

router.post("/create", postController.createPost);

module.exports = router;
