// Importa a classe Controller do arquivo './Controller.js'. 
const Controller = require('./Controller.js');
const DestinoServices = require('../services/DestinoServices.js');

const destinoServices = new DestinoServices();

// Define a classe DestinoController que herda da classe base Controller. 
class DestinoController extends Controller {
    constructor(){
        super(destinoServices);
    }
}

module.exports = DestinoController;