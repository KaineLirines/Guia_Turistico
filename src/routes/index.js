// Importa o módulo Express, que é utilizado para criar e gerenciar o servidor web e suas rotas.
const express = require('express');
// Importa o módulo de rotas para usuários, que provavelmente define as rotas relacionadas a operações de usuário.
const usuarios = require('./usuarioRoute.js');
// Importa o módulo de rotas para destinos, que define as rotas relacionadas a operações de destino turístico.
const destinos = require('./destinoRoute.js');
// Importa o módulo de rotas para atrativos, que define as rotas relacionadas a operações de atrativos turísticos.
const atrativos = require('./atrativoRoute.js');

// Exporta uma função que recebe a instância do aplicativo Express (app) como argumento.
module.exports = app => {
    app.use(
        express.json(), 
        usuarios,
        destinos,
        atrativos
    );
};