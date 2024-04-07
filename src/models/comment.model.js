const commentModel = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    body: DataTypes.STRING,
  });
  Comment.associate = (models) => {
    Comment.belongsTo(models.Post, {
      foreignKey: "postId",
      onDelete: "CASCADE",
    });
  };
  return Comment;
};

module.exports = commentModel;
