
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RobotTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RobotTasks.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    robot_id: {
      type: DataTypes.INTEGER,
      validate: {
        onForeignContraintError : (field, message) => {
          message('User Robot id not found');
        }
      },
    },
    task_id: {
      type: DataTypes.INTEGER,
      validate: {
        onForeignContraintError : (field, message) => {
          message('task id not found');
        }
      },
    },
    schedule: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM,
      allowNull: true,
      values: [
        '0',
        '1'
      ],
      defaultValue: '1',
      comment: "1=active,0=inactive"
    }
  }, {
    timestamps : false,
    sequelize,
    modelName: 'robot_tasks',
    underscored: true,
  });
  return RobotTasks;
};