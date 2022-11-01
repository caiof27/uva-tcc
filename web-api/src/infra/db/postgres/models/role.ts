'use strict';
import { Model }from 'sequelize';
import { RoleModel } from '../../../../domain/models/role'


module.exports = (sequelize: any, DataTypes: any) => {
  class role extends Model<RoleModel> implements RoleModel {
    id!: number;
    role!: string;
    dependency!: number;
    static associate(models: any) {
    }
  }
  role.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    role: { 
      type: DataTypes.STRING, allowNull: false 
    },
    dependency:{
      type: DataTypes.INTEGER, allowNull: true 
    }
  }, {
    sequelize,
    modelName: 'role',
  });
  return role;
};