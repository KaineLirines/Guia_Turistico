// A classe Services é importada do arquivo './Services.js'
const Services = require('./Services.js');

// Define a classe UsuarioServices que herda de Services.
class UsuarioServices extends Services{
    constructor() {
        super('Usuario');
    }
}

module.exports = UsuarioServices;