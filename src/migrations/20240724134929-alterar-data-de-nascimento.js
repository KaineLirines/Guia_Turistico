'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('usuarios','data-nascimento','dataNascimento');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('usuarios','data-nascimento','dataNascimento');
  }
};
