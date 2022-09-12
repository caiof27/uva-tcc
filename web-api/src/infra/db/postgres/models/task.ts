'use strict';
import { Model }from 'sequelize';

interface ITasks {
  id: number;
  title: string;
  priority: string;
  description: string;
  status: string;
  createdBy: string;
  assignTo: string;
  finishedAt: Date;
}

module.exports = (sequelize: any, DataTypes:  any) => {
  class task extends Model<ITasks> implements ITasks {
    id!: number;
    title!: string;
    priority!: string;
    description!: string;
    status!: string;
    createdBy!: string;
    assignTo!: string;
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
      type: DataTypes.STRING, allowNull: false 
    },
    description:{
      type: DataTypes.STRING, allowNull: false 
    },
    status:{
      type: DataTypes.STRING, allowNull: false 
    },
    createdBy:{
      type: DataTypes.STRING, allowNull: false 
    },
    assignTo:{
      type: DataTypes.STRING, allowNull: false 
    },
    finishedAt:{
      type: DataTypes.DATE, allowNull: false 
    },
  
  
  }, {
    sequelize,
    modelName: 'task',
  });
  return task;
};