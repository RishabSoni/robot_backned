'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fields', {
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
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      block_count: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      width: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      height: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      area: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      coordinates: {
        type: Sequelize.TEXT,
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
      'fields',
      {
        type: 'foreign key',
        fields: ['user_id'],
        name: 'fields_user_id_fk',
        references: {
          table: 'users',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    ));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fields');
  }
};