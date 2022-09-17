'use strict';

const tableName = 'tasks';
const schema = 'public'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint({tableName,schema},{
      type: 'FOREIGN KEY',
      name: 'FK-User_status-Status_id',
      fields: ['status'],
      references:{
        table: {tableName: 'status', schema},
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint({tableName,schema},'FK-User_status-Status_id');
  }
};
