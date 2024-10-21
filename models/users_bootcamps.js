'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Bootcamps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users_Bootcamps.init({
    userId: DataTypes.INTEGER,
    bootcampId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users_Bootcamps',
  });
  return Users_Bootcamps;
};