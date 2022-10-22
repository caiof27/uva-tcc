'use strict';
import { Model }from 'sequelize';
import { TaskModel } from '../../../../domain/models/task'

module.exports = (sequelize: any, DataTypes:  any) => {
  class task extends Model<TaskModel> implements TaskModel {
    id!: number;
    title!: string;
    priority!: string;
    description!: string;
    status!: number;
    createdBy!: number;
    assignTo!: number;
    finishedAt!: Date;
    static associate(models: any) {

    }
  }
  task.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: { 
      type: DataTypes.STRING, allowNull: false 
    },
    priority:{ 
      type: DataTypes.STRING, allowNull: true 
    },
    description:{
      type: DataTypes.STRING, allowNull: false 
    },
    status:{
      type: DataTypes.INTEGER, allowNull: false 
    },
    createdBy:{
      type: DataTypes.INTEGER, allowNull: false 
    },
    assignTo:{
      type: DataTypes.INTEGER, allowNull: true 
    },
    finishedAt:{
      type: DataTypes.DATE, allowNull: true 
    },
  
  
  }, {
    sequelize,
    modelName: 'task',
  });
  return task;
};