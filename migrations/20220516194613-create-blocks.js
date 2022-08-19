'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('blocks', {
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
      field_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      width: {
        type: Sequelize.STRING,
        allowNull: true
      },
      height: {
        type: Sequelize.STRING,
        allowNull: true
      },
      area: {
        type: Sequelize.STRING,
        allowNull: true
      },
      coordinates: {
        type: Sequelize.TEXT,
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
      'blocks',
      {
        type: 'foreign key',
        fields: ['field_id'],
        name: 'blocks_field_id_fk',
        references: {
          table: 'fields',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    ));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('blocks');
  }
};