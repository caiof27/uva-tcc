'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('status',[
      {
        status: 'Novo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Em Andamento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Concluído',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Cancelado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
