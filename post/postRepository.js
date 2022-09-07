const { postModel } = require("../models/index");

async function createPost(post) {
  try {
    const newPost = await postModel.create(post, { raw: true });
    return newPost;
  } catch (error) {
    console.log(error.message);
  }
}

async function findOnebyId(id) {
  try {
    const Post = await postModel.findByPk(id, { raw: true });
    return Post;
  } catch (error) {
    console.log(error.message);
  }
}

async function updatePost(post) {
  await postModel.update(post, { where: { id: post.id }, raw: true });
}

async function deletePost(post) {
  await postModel.destroy({ where: { id: post.id } });
}

async function findListbyPage(page) {
  return await postModel.findAll({
    attributes: ["id", "userId", "title", "content"],
    offset: (page - 1) * 20,
    limit: 20,
    order: [["id", "DESC"]],
    raw: true,
  });
}

module.exports = { createPost, findOnebyId, updatePost, deletePost, findListbyPage };
