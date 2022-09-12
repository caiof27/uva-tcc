'use strict';
import { Model }from 'sequelize';

interface IAttachment {
  id: number;
  filename: string;
  task_id: number;
}

module.exports = (sequelize:any, DataTypes:any) => {
  class attachment extends Model<IAttachment> implements IAttachment {
    id!: number;
    filename!: string;
    task_id!: number;
    static associate(models:any ) {
      // define association here
    }
  }
  attachment.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    filename: { 
      type: DataTypes.STRING, allowNull: false 
    },
    task_id: { 
      type: DataTypes.INTEGER, allowNull: false 
    },
  }, {
    sequelize,
    modelName: 'attachment',
  });
  return attachment;
};