// Definição da Classe
class Controller {
    constructor (entidadeService) {
        this.entidadeService = entidadeService;
    }

    // Recupera todos os registros usando o método pegaTodosOsRegistros do serviço. 
    async pegaTodos(req, res) {
        try{
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistro);
        } catch (erro) {
          res.status(404).json({mensagem:'erro'})
        }
    }

    // Recupera um registro específico pelo ID fornecido como parâmetro de URL (req.params.id). 
    async pegaUmPorId(req, res) {
    const { id } = req.params;
      try {
        const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
        return res.status(200).json(umRegistro);
      } catch (erro) {
        console.error('Erro ao pegar registro por ID:', erro);
        res.status(404).json({mensagem:'erro'})
      }
    }

    // Atualiza um registro específico com base no ID fornecido e os dados enviados no corpo da requisição (req.body).
    async atualiza(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
          //isUpdated
          const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
          if (!foiAtualizado) {
            return res.status(400).json({ mensagem: 'registro não foi atualizado' });
          }
          return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
        } catch (erro) {
          // erro
        }
      }

    // Cria um novo registro usando os dados fornecidos no corpo da requisição (req.body).
    async criaNovo(req, res){
      const dadosParaCriacao  = req.body;
      try{
        const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
        return res.status(200).json(novoRegistroCriado);
      } catch (erro){
        return res.status(400).json({ mensagem: 'cadastro não realizado' });
      }
    }
}

module.exports = Controller;