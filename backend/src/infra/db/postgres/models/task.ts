'use strict';
import { Model }from 'sequelize';
import { ITask } from '../../../../domain/models/task'

module.exports = (sequelize: any, DataTypes:  any) => {
  class task extends Model<ITask> implements ITask {
    id!: number;
    title!: string;
    priority!: string;
    description!: string;
    status!: string;
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
      type: DataTypes.STRING, allowNull: true 
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