'use strict';
import { Model }from 'sequelize';
import { FollowUpModel } from '../../../../domain/models/followup'

module.exports = (sequelize:any, DataTypes:any) => {
  class followUp extends Model<FollowUpModel> implements FollowUpModel {
    id!: number;
    description!: string;
    task_id!: number;
    createdBy!:number;
    static associate(models:any ) {
      // define association here
    }
  }
  followUp.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: { 
      type: DataTypes.STRING, allowNull: false 
    },
    task_id: { 
      type: DataTypes.INTEGER, allowNull: false 
    },
    createdBy: {
      type: DataTypes.INTEGER, allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'followup',
  });
  return followUp;
};