module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seedData = [
      {
        postId: 8,
        body: "testando comment",
        createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      {
        postId: 9,
        body: "testando comment 2",
        createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    ];

    // Insira apenas um dos comentários
    const selectedComment = seedData[0]; // Altere o índice conforme necessário

    // Insere o comentário e retorna seu ID
    const insertedComment = await queryInterface.bulkInsert(
      "Comments",
      [selectedComment],
      { returning: true }
    );

    // Retorna o ID do comentário inserido
    return insertedComment[0].id;
  },

  down: async (queryInterface, Sequelize) => {
    // Remove o comentário com base no ID especificado na variável de ambiente
    const insertedCommentId = process.env.COMMENT_ID_TO_DELETE;
    if (!insertedCommentId) {
      throw new Error(
        "O ID do comentário a ser removido não foi especificado."
      );
    }
    return queryInterface.bulkDelete("Comments", { id: insertedCommentId });
  },
};
