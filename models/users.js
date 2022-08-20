'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
    },
    profile_image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    company_name: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT(),
      allowNull: true,
    },
    country_id: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    zip: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER(1),
      defaultValue: 0
    },
    step: {
      type: DataTypes.INTEGER(1),
      defaultValue: 0
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'userModel',
    underscored: true,
  });
  return Users;
};