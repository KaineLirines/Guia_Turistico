// Importa a função Router do módulo Express. 
const { Router } = require('express');
// Importar Classe
const UsuarioController = require('../controllers/UsuarioController.js');

const usuarioController = new UsuarioController();

// Cria uma instância do roteador (router). 
const router = Router();

// Definição de rotas
router.get('/usuarios', (req, res) => usuarioController.pegaTodos(req, res));
router.get('/usuarios/:id', (req, res) => usuarioController.pegaUmPorId(req, res));
router.put('/usuarios/:id', (req, res) => usuarioController.atualiza(req, res));
router.post('/usuarios', (req, res) => usuarioController.criaNovo(req,res));

module.exports = router;