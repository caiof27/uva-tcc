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
      name: "Gerente A",
      role_id: 3,
      username: "gerentea",
      password: "gerentea@senha",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Gerente B",
      role_id: 4,
      username: "gerenteb",
      password: "gerenteb@senha",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Gerente C",
      role_id: 5,
      username: "gerentec",
      password: "gerentec@senha",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Usuario A",
      role_id: 6,
      username: "usuarioa",
      password: "usuarioa@senha",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Usuario B",
      role_id: 7,
      username: "usuariob",
      password: "usuariob@senha",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Usuario C",
      role_id: 8,
      username: "usuarioc",
      password: "usuarioc@senha",
      createdAt: new Date(),
      updatedAt: new Date()
    }
      
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
