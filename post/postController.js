const postService = require("./postService");
const { StatusCodes } = require("http-status-codes");

async function createPost(req, res) {
  const post = req.body;
  try {
    await postService.createPost(post);
    return res.status(StatusCodes.CREATED).send({ message: "OK" });
  } catch (error) {
    console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: error.message });
  }
}

module.exports = { createPost };
