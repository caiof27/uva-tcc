'use strict';
import { Model } from 'sequelize';
import { UserModel } from '../../../../domain/models/user'


module.exports = (sequelize: any, DataTypes:any ) => {
  class user extends Model<UserModel> implements UserModel {
    id!: number;
    name!: string;
    role_id!: number;
    username!: string;
    password!: string;
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
      type: DataTypes.INTEGER, allowNull: false 
    },
    username: { 
      type: DataTypes.STRING, allowNull: false 
    },
   password: { 
      type: DataTypes.STRING, allowNull: false 
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};