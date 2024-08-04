// Importa a função Router do módulo Express. 
const { Router } = require('express');
// Importar Classe
const DestinoController = require('../controllers/DestinoController.js');

const destinoController = new DestinoController();

// Cria uma instância do roteador (router). 
const router = Router();

// Definição de rotas
router.get('/destinos', (req, res) => destinoController.pegaTodos(req, res));
router.get('/destinos/:id', (req, res) => destinoController.pegaUmPorId(req, res));
router.put('/destinos/:id', (req, res) => destinoController.atualiza(req, res));
router.post('/destinos', (req, res) => destinoController.criaNovo(req, res));

module.exports = router;