'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return
    return queryInterface.bulkInsert('roles',[
      {
        role: 'Administrador',
        dependency:null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'Tecnico',
        dependency:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'Usuario',
        dependency:2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
