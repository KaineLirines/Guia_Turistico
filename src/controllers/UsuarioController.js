// Importa a classe Controller do arquivo './Controller.js'. 
const Controller = require('./Controller.js');
const UsuarioServices = require('../services/UsuarioServices.js');

const usuarioServices = new UsuarioServices();

// Define a classe UsuarioController que herda da classe base Controller. 
class UsuarioController extends Controller {
    constructor(){
        super(usuarioServices);
    }
}

module.exports = UsuarioController;