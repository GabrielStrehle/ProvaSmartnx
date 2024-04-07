const { Post, Comment } = require("../models");

const getAll = async () => {
  const posts = await Post.findAll({
    include: { model: Comment, as: "comments" },
  });
  return posts;
};

const getId = async (id) => {
  const post = await Post.findByPk(id, {
    include: { model: Comment, as: "comments" },
  });
  return post;
};

const postCreate = async (title, body) => {
  const post = await Post.create({ title, body });
  return post;
};

const postDelete = async (id) => {
  const deletedPostCount = await Post.destroy({ where: { id } });
  return deletedPostCount;
};

module.exports = {
  getAll,
  getId,
  postCreate,
  postDelete,
};
