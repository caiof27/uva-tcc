'use strict';

import { StatusModel } from "../../../../domain/models/status";

const {
  Model
} = require('sequelize');
module.exports = (sequelize:any, DataTypes:any) => {
  class status extends Model<StatusModel> implements StatusModel {
    id!: number;
    status!: string;
    static associate(models:any) {
      // define association here
    }
    
  }
  status.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {type:DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    modelName: 'status',
  });
  return status;
};