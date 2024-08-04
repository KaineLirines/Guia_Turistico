// Importa a classe Controller do arquivo './Controller.js'. 
const Controller = require('./Controller.js');
const AtrativoServices = require('../services/AtrativoService.js')

const atrativoServices = new AtrativoServices();

// Define a classe AtrativoController que herda da classe base Controller. 
class AtrativoController extends Controller {
    constructor(){
        super(atrativoServices);
    }
}

module.exports = AtrativoController;
