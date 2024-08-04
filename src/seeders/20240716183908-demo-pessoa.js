'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios',[
    {
      nome: 'Solange Estudante',
      email: 'solange@email.com',
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      CEP: '63058133022',
      dataNascimento: '2000-03-01',
      senha: '123',
      genero: true,
    }
  ] , {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('usuarios', null, {});
  }
};
