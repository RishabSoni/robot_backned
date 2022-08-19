'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('task_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      robot_type_id: {
        type: Sequelize.INTEGER
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
      'task_types',
      {
        type: 'foreign key',
        fields: ['robot_type_id'],
        name: 'task_types_robot_type_id_fk',
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
    await queryInterface.dropTable('task_types');
  }
};