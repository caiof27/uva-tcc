'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('roles',[
      {
        role: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'Tecnico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'Usuario',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
