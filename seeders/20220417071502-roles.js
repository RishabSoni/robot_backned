'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('roles', [{
      name: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Client',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Project Manager',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('roles', {[Op.or]: [{name: 'Admin'}, {name: 'Client'}, {name: 'Project Manager'}]}, {});
  }
};
