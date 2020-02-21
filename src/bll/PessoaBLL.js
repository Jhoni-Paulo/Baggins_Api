import PessoaDAL from "../dal/PessoaDAL"
import { SessaoBLL } from "."

class PessoaBLL{

  async buscarUsuario(email) {
    try {
      return await PessoaDAL.buscarUsuario(email)
    } catch (error) {
      throw error
    }
  }

  async _checarUsuario(email) {
    try { return (await PessoaDAL.buscarUsuario(email)) }
    catch (error) { return false }    
  }

  async criarUsuario(usuario) {
    try {
      if(await this._checarUsuario(usuario.email)) throw "Usuário já existe!"
      return await PessoaDAL.criarUsuario(usuario)
    } catch (error) {
      throw error
    }
  }

  async atualizarUsuario(usuario, usuarioId){
    try {
      const pessoa = await PessoaDAL.buscarUsuarioPorId(usuarioId)

      if(!pessoa) throw "Usuário não encontrado!"

      if(usuario.senhaAntiga && !SessaoBLL._verificarSenha(usuario.senhaAntiga, pessoa.senhaHash))
        throw status(401).json({ error : "Senha inválida" })
           
      return await PessoaDAL.atualizarUsuario(usuario, pessoa)

    } catch (error) {
      throw error
    }
  }

  async deletarUsuario(usuarioId){
    try {
      const pessoa = await PessoaDAL.buscarUsuarioPorId(usuarioId)

      if(!pessoa) throw "Usuário não encontrado!"
      
      await PessoaDAL.deletarUsuario(usuarioId, pessoa)
      return pessoa.email

    } catch (error) {
      throw error
    }
  }

}

export default new PessoaBLL()
