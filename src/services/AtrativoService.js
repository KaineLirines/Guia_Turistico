// A classe Services é importada do arquivo './Services.js'
const Services = require('./Services.js');

// Define a classe AtrativoServices que herda de Services
class AtrativoServices extends Services{
    constructor() {
        super('Atrativos');
    }
}

module.exports = AtrativoServices;
