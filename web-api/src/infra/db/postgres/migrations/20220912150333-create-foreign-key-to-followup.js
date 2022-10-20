'use strict';

const tableName = 'followup';
const schema = 'public'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint({tableName,schema},{
      type: 'FOREIGN KEY',
      name: 'FK-FollowUp_task_id-FollowUp_task_id',
      fields: ['task_id'],
      references:{
        table: {tableName: 'tasks', schema},
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint({tableName,schema},'FK-FollowUp_task_id-FollowUp_task_id');
  }
};
