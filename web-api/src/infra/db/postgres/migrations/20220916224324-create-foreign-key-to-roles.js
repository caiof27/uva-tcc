'use strict';

const tableName = 'roles';
const schema = 'public'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint({tableName,schema},{
      type: 'FOREIGN KEY',
      name: 'FK-Roles_dependency-Roles_id',
      fields: ['dependency'],
      references:{
        table: {tableName: 'roles', schema},
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint({tableName,schema},'FK-Roles_dependency-Roles_id');
  }
};
