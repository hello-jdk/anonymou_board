const postRepository = require("./postRepository");
const postUtil = require("./postUtil");

async function createPost(post) {
  post.userPw = await postUtil.passwordEncrypt(post.userPw);
  await postRepository.createPost(post);
}

async function updatePost(post) {
  // 검증
  const oldPost = await postRepository.findOnebyId(post.id);
  if (!oldPost) throw Error("해당 글이 존재하지 않습니다.");

  const passwordValid = await postUtil.passwordValid(post.userPw, oldPost.userPw);
  if (!passwordValid) throw Error("비밀번호가 일치하지 않습니다.");

  // 게시글 수정
  post.userPw = await postUtil.passwordEncrypt(post.userPw);
  await postRepository.updatePost(post);
}

async function deletePost(post) {
  // 검증
  const oldPost = await postRepository.findOnebyId(post.id);
  if (!oldPost) throw Error("해당 글이 존재하지 않습니다.");

  const passwordValid = await postUtil.passwordValid(post.userPw, oldPost.userPw);
  if (!passwordValid) throw Error("비밀번호가 일치하지 않습니다.");

  // 게시글 삭제
  await postRepository.deletePost(post);
}

module.exports = { createPost, updatePost, deletePost };
