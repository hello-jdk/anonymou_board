const router = require("express").Router();

const postController = require("./postController");
const postMiddleware = require("./postMiddleware");

router.post("/create", postMiddleware.inValidCreate, postController.createPost);

module.exports = router;
