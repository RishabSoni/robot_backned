'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Robots extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Robots.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    robot_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'robots',
    underscored: true,
  });
  return Robots;
};