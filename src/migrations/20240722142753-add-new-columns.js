'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('usuarios', 'data-nascimento', {
      type: Sequelize.DATE,
      defaultValue: null,
    });
    await queryInterface.addColumn('usuarios', 'senha', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('usuarios', 'genero', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'data-nascimento');
    await queryInterface.removeColumn('usuarios', 'senha');
    await queryInterface.removeColumn('usuarios', 'genero');
  }
};
