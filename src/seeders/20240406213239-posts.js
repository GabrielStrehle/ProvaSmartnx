module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("Posts", [
      {
        title: "Leonardo",
        body: "testando",
        createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      {
        title: "Eduardo",
        body: "testando 2",
        createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    ]),

  async down(queryInterface, Sequelize) {},
};
