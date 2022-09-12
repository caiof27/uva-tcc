'use strict';
import { Model }from 'sequelize';


interface IRole {
  id: number;
  role: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class role extends Model<IRole> implements IRole {
    id!: number;
    role!: string;
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
  }, {
    sequelize,
    modelName: 'role',
  });
  return role;
};