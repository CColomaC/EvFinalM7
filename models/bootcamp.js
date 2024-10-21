'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bootcamp.belongsToMany(models.User,{
        through: 'Users_Bootcamps',
        foreignKey: 'bootcampId',
        otherKey: 'userId',
        as: 'Users'
      })
    }
  }
  Bootcamp.init({
    title: DataTypes.STRING,
    cue: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bootcamp',
  });
  return Bootcamp;
};