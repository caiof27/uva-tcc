'use strict';

const tableName = 'users';
const schema = 'public'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint({tableName,schema},{
      type: 'FOREIGN KEY',
      name: 'FK-User_role_id-Role_id',
      fields: ['role_id'],
      references:{
        table: {tableName: 'roles', schema},
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint({tableName,schema},'FK-User_role_id-Role_id');
  }
};
