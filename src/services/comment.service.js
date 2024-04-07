const { Comment } = require("../models");
const postServ = require("./post.service");

const commentCreate = async (postId, body) => {
  const comment = await Comment.create({ postId, body });
  const posts = await postServ.getAll();
  return posts;
};

const commentDelete = async (id) => {
  const comment = await Comment.findByPk(id);
  if (comment) {
    await comment.destroy();
  }
  const posts = await postServ.getAll();
  return posts;
};

module.exports = {
  commentCreate,
  commentDelete,
};
