'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('robot_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.DataTypes.ENUM,
        values: ['0', '1'],
        allowNull: false,
        defaultValue: '1'
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('robot_types');
  }
};