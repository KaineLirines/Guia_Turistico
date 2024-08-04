'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'CPF');
    await queryInterface.removeColumn('usuarios', 'local');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('usuarios', 'CPF', {
      type: Sequelize.STRING,
      allowNull: true,
    })
    ;
    await queryInterface.addColumn('usuarios', 'local', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  }
};
