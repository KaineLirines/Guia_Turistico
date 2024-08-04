// Importação do 'dataSource'
const dataSource = require('../models');

// Definição da Classe 'services'
class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }
    
    // método para pegar registro do modelo chamando o métrodo 'findAll()'
    async pegaTodosOsRegistros(){
        return dataSource[this.model].findAll();
    }
    
    // método retorna um único registro do modelo especificado, buscando pelo seu identificador primário (id) usando o método findByPk().
    async pegaUmRegistroPorId(id) {
        return dataSource[this.model].findByPk(id);
    }

    // método atualiza um registro específico no modelo com os dados fornecidos (dadosAtualizados).
    async atualizaRegistro(dadosAtualizados, id) {
        const listadeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
          where: { id: id }
        });
        if (listadeRegistrosAtualizados[0] === 0) {
          return false;
        }
        return true;
      }
    
    // método cria um novo registro no modelo especificado com os dados fornecidos (dadosDoRegistro) usando o método create().
    async criaRegistro(dadosDoRegistro){
      return dataSource[this.model].create(dadosDoRegistro);
    }
}

// Exporta a classe Services para que possa ser usada em outros arquivos.
module.exports = Services;