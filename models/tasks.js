'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tasks.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    task_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    field_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    block_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    task_status: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5'
      ],
      defaultValue: '0',
      comment: "0=pending,1=started,2=in progress,3=error,4=paused,5=completed"
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
    timestamps: false,
    sequelize,
    modelName: 'tasks',
    underscored: true,
  });
  return Tasks;
};