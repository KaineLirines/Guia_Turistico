// Importa a função Router do módulo Express. 
const { Router } = require('express');
// Importar Classe
const AtrativoController = require('../controllers/AtrativoController.js');

const atrativoController = new AtrativoController();

// Cria uma instância do roteador (router). 
const router = Router();

// Definição de rotas
router.get('/atrativos', (req, res) => atrativoController.pegaTodos(req, res));
router.get('/atrativos/:id', (req, res) => atrativoController.pegaUmPorId(req, res));
router.put('/atrativos/:id', (req, res) => atrativoController.atualiza(req, res));
router.post('/atrativos', (req, res) => atrativoController.criaNovo(req, res));

module.exports = router;

