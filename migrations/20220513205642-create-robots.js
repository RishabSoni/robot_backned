'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('robots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      robot_type_id: {
        type: Sequelize.INTEGER,
        allowNull: true
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
    }).then(() => queryInterface.addConstraint(
      'robots',
      {
        type: 'foreign key',
        fields: ['robot_type_id'], 
        name: 'robot_type_id_fk',
        references: {
          table: 'robot_types',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    ));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('robots');
  }
};