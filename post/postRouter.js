const router = require("express").Router();

const postController = require("./postController");
const postMiddleware = require("./postMiddleware");

router.post("/", postMiddleware.inValidPost, postController.createPost);
router.put(
  "/",
  postMiddleware.isValidPostUpdate,
  postMiddleware.inValidPost,
  postController.updatePost
);
router.delete("/", postController.deletePost);
router.get("/:page", postController.listOfPost);

module.exports = router;
