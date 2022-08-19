'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersRobot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsersRobot.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'idUsers',
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    robot_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false,
    sequelize,
    modelName: 'users_robot',
    underscored: true,
  });
  return UsersRobot;
};