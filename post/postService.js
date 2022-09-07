const postRepository = require("./postRepository");
const postUtil = require("./postUtil");

async function createPost(post) {
  post.user_pw = await postUtil.passwordEncrypt(post.user_pw);
  await postRepository.createPost(post);
}

module.exports = { createPost };
