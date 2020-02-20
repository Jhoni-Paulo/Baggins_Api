import PessoaDAL from "../dal/PessoaDAL"

class PessoaBLL{

  async buscarUsuario(email) {
    try {
      return await PessoaDAL.buscarUsuario(email)
    } catch (error) {
      return error
    }
  }

  async checarUsuario(email) {
    return await PessoaDAL.buscarUsuarioSemThrow(email) ? true : false
  }

  async criarUsuario(usuario) {
    try {
      if(await this.checarUsuario(usuario.email))
        throw "Usuário já existe!"
      else
        return await PessoaDAL.criarUsuario(usuario)
    } catch (error) {
      return error
    }
  }
}

export default new PessoaBLL()
