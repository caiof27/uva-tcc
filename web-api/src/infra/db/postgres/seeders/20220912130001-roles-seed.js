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
        role: 'Gerente A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'Gerente B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'Gerente C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'Usuario A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'Usuario B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'Usuario C',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
