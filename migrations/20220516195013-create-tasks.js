'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
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
      task_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      field_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      block_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      task_status: {
        type: Sequelize.DataTypes.ENUM,
        allowNull: false,
        values: [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5'
        ],
        defaultValue: '0',
        comment: "0=pending,1=started,2=in progress,3=error,4=paused,5=completed"
      },
      status: {
        type: Sequelize.DataTypes.ENUM,
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
      'tasks',
      {
        type: 'foreign key',
        fields: ['task_type_id'],
        name: 'tasks_task_type_id_fk',
        references: {
          table: 'task_types',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    )).then(() => queryInterface.addConstraint(
      'tasks',
      {
        type: 'foreign key',
        fields: ['user_id'],
        name: 'tasks_user_id_fk',
        references: {
          table: 'users',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    )).then(() => queryInterface.addConstraint(
      'tasks',
      {
        type: 'foreign key',
        fields: ['field_id'],
        name: 'tasks_field_id_fk',
        references: {
          table: 'fields',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    )).then(() => queryInterface.addConstraint(
      'tasks',
      {
        type: 'foreign key',
        fields: ['block_id'],
        name: 'tasks_block_id_fk',
        references: {
          table: 'blocks',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    ));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};