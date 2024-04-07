const CommentServ = require("../services/comment.service");

const commentCreate = async (req, res) => {
  try {
    const postId = req.params.id;
    const body = req.body;
    const comment = await CommentServ.commentCreate(postId, body);
    return res.status(201).json(comment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const commentDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const comment = await CommentServ.commentDelete(id);
    return res.status(200).json(comment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  commentCreate,
  commentDelete,
};
