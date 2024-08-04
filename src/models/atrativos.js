'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atrativos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Atrativos.init({
    descricao: DataTypes.STRING,
    foto: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Atrativos',
    tableName: 'atrativos'
  });
  return Atrativos;
};


// alterei o modelName 'Atrativo'