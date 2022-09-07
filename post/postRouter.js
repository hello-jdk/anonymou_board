const router = require("express").Router();

const postController = require("./postController");
const postMiddleware = require("./postMiddleware");

router.post("/", postMiddleware.inValidCreate, postController.createPost);

module.exports = router;
