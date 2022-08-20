'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await  queryInterface.createTable( 'users',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      role_id: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
      },
      profile_image: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      company_name: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      title: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING(25),
        allowNull: true,
      },
      address: {
        type: Sequelize.TEXT(),
        allowNull: true,
      },
      country_id: {
        type: Sequelize.INTEGER(5),
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      zip: {
        type: Sequelize.INTEGER(10),
        allowNull: true,
      },
      status: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
      },
      step: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }   
    }
      
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
