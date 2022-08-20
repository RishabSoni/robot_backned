'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('robot_tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      robot_id: {
        type: Sequelize.INTEGER
      },
      task_id: {
        type: Sequelize.INTEGER
      },
      schedule: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM,
        allowNull: true,
        values: [
          '0',
          '1'
        ],
        defaultValue: '1',
        comment: "1=active,0=inactive"
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
      'robot_tasks',
      {
        type: 'foreign key',
        name: 'robot_tasks_robot_id_fk',
        fields: ['robot_id'],
        references: {
          table: 'users_robots',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    )).then(() => queryInterface.addConstraint(
      'robot_tasks',
      {
        type: 'foreign key',
        name: 'robot_tasks_task_id_fk',
        fields: ['task_id'],
        references: {
          table: 'tasks',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    ));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('robot_tasks');
  }
};