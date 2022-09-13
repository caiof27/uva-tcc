'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users','username',{
      allowNull: false,
      type: Sequelize.STRING
    }),
    await queryInterface.addColumn('users','password',{
      allowNull: false,
      type: Sequelize.STRING
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'username');
    await queryInterface.removeColumn('users', 'password');
  }
};
