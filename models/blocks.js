'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Blocks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blocks.init({
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
    field_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    width: {
      type: DataTypes.STRING,
      allowNull: true
    },
    height: {
      type: DataTypes.STRING,
      allowNull: true
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coordinates: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'blocks',
    underscored: true,
  });
  return Blocks;
};