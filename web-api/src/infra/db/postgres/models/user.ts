'use strict';
import { Model } from 'sequelize';

interface IUser {
  id: number;
  name: string;
  role_id: string;
}
module.exports = (sequelize: any, DataTypes:any ) => {
  class user extends Model<IUser> implements IUser {
    id!: number;
    name!: string;
    role_id!: string;
    static associate(models: any) {
    }
  }
  user.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { 
      type: DataTypes.STRING, allowNull: false 
    },
    role_id: { 
      type: DataTypes.STRING, allowNull: false 
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};