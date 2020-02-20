import { Pessoa } from "../app/models"

class PessoaDAL{

  async buscarUsuario(email) {
    try {
      return await Pessoa.findOne( { where: { email} } )
    } catch (error) { return error }
  }

  async buscarUsuarioSemThrow(email) { return await Pessoa.findOne( { where: { email} } ) }

  async criarUsuario(pessoa) {
    try {
      return await Pessoa.create(pessoa)
    } catch (error) { return error }
  }

}

export default new PessoaDAL()
