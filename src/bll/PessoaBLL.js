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

  async atualizarUsuario(usuario){
    const { usuarioId, nome, email, senha, senhaAntiga } = usuario
    try {
      const pessoa = await PessoaDAL.buscarUsuarioPorId(usuarioId)

      if(!pessoa) throw "Usuário não encontrado!"

      if(senhaAntiga && !SessaoBLL._verificarSenha(senhaAntiga, pessoa.senhaHash))
        throw status(401).json({ error : "Senha inválida" })
      
      if(email) pessoa.email = email
      if(nome) pessoa.nome = nome
      if(senha) pessoa.senha = senha

      return await PessoaDAL.atualizarUsuario(pessoa)

    } catch (error) {
      throw error
    }
  }
}

export default new PessoaBLL()
