'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users',[
    {
      name: "Administrador",
      role_id: 1,
      username: "admin",
      password: "admin@senha",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Tecnico",
      role_id: 2,
      username: "tecnico",
      password: "tecnico@senha",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Usuario",
      role_id: 3,
      username: "usuario",
      password: "usuario@senha",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
