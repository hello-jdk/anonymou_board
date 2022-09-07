const postRepository = require("./postRepository");

async function createPost(post) {
  await postRepository.createPost(post);
}

module.exports = { createPost };
