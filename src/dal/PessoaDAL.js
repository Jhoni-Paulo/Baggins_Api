import { Pessoa } from "../app/models"

class PessoaDAL{

  async buscarUsuario(email) {
    try {
      return await Pessoa.findOne( { where: { email} } )
    } catch (error) { throw error }
  }

  async buscarUsuarioPorId(id) {
    try {
      return await Pessoa.findByPk(id)
    } catch (error) { throw error }
  }

  async criarUsuario(pessoa) {
    try {
      return await Pessoa.create(pessoa)
    } catch (error) { throw error }
  }

  async atualizarUsuario(pessoa) {      
      try {
        return await Pessoa.update(pessoa)
      } catch (error) { throw error }
  }

}

export default new PessoaDAL()
