'use strict';

const tableName = 'followups';
const schema = 'public'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint({tableName,schema},{
      type: 'FOREIGN KEY',
      name: 'FK-followups_createdBy-Users_id',
      fields: ['createdBy'],
      references:{
        table: {tableName: 'users', schema},
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint({tableName,schema},'FK-followups_createdBy-Users_id');
  }
};
