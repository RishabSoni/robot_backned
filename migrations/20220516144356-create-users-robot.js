'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users_robots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      robot_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false
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
      'users_robots',
      {
        type: 'foreign key',
        name: 'users_robots_user_id_fk',
        fields: ['user_id'],
        references: {
          table: 'users',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    )).then(() => queryInterface.addConstraint(
      'users_robots',
      {
        type: 'foreign key',
        name: 'users_robots_robot_type_id_fk',
        fields: ['robot_type_id'],
        references: {
          table: 'robot_types',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    ))
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users_robots');
  }
};