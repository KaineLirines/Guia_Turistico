'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    CEP: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    senha: DataTypes.STRING,
    genero: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};