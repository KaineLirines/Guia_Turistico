// Importa o módulo Express, que é um framework para construir aplicativos web e APIs
const express = require('express');
// Importa as rotas definidas em um arquivo separado, presumivelmente './routes'
const routes = require('./routes');
// Importa o módulo 'cors' para habilitar CORS (Cross-Origin Resource Sharing)
const cors = require('cors');

// Cria uma instância do aplicativo Express
const app = express();

// Utiliza o middleware 'cors' para habilitar CORS em todas as rotas do aplicativo
app.use(cors());

// Chama a função de rotas, passando a instância do aplicativo Express, para configurar as rotas
routes(app);

// Exporta a instância do aplicativo Express para que possa ser usada em outros arquivos
module.exports = app;
