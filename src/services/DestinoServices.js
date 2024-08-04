// A classe Services é importada do arquivo './Services.js'
const Services = require('./Services.js');

// Define a classe DestinoServices que herda de Services
class DestinoServices extends Services{
    constructor() {
        super('Destino');
    }
}

module.exports = DestinoServices;