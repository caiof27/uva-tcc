'use strict';

const tableName = 'tasks';
const schema = 'public'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint({tableName,schema},{
      type: 'FOREIGN KEY',
      name: 'FK-Task_createdBy-User_id',
      fields: ['createdBy'],
      references:{
        table: {tableName: 'users', schema},
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
    await queryInterface.addConstraint({tableName,schema},{
      type: 'FOREIGN KEY',
      name: 'FK-Task_assignTo-User_id',
      fields: ['assignTo'],
      references:{
        table: {tableName: 'users', schema},
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint({tableName,schema},'FK-Task_createdBy-User_id');
    await queryInterface.removeConstraint({tableName,schema},'FK-Task_assignTo-User_id');
  }
};
