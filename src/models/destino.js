'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destino extends Model {
    static associate(models) {
      // define association here
    }
  }
  Destino.init({
    cidade: DataTypes.STRING,
    regiao: DataTypes.STRING,
    categoria: DataTypes.STRING,
    atrativo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Destino',
    tableName: 'destinos'
  });
  return Destino;
};