const { postModel } = require("../models/index");

async function createPost(post) {
  try {
    const newPost = await postModel.create(post, { raw: true });
    return newPost;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { createPost };
