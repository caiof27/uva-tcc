'use strict';

const tableName = 'attachments';
const schema = 'public'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint({tableName,schema},{
      type: 'FOREIGN KEY',
      name: 'FK-Attachment_task_id-Attachment_id',
      fields: ['task_id'],
      references:{
        table: {tableName: 'tasks', schema},
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint({tableName,schema},'FK-Attachment_task_id-Attachment_id');
  }
};
