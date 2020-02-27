import PersonDAL from "../dal/PersonDAL"
import { SessionBLL } from "."

class PersonBLL{

  async getUser(email) {
    try {
      return await PersonDAL.getUser(email)
    } catch (error) {
      throw error
    }
  }

  async _checkUser(email) {
    try { return (await PersonDAL.getUser(email)) }
    catch (error) { return false }    
  }

  async createUser(user) {
    try {
      if(await this._checkUser(user.email)) throw "Usuário já existe!"
      return await PersonDAL.createUser(user)
    } catch (error) {
      throw error
    }
  }

  async updateUser(user, userId){
    try {
      const person = await PersonDAL.getUserById(userId)

      if(!person) throw "Usuário não encontrado!"

      if(user.oldPassword && !SessionBLL._checkPassword(user.oldPassword, person.passwordHash))
        throw status(401).json({ error : "Senha inválida" })
           
      return await PersonDAL.updateUser(user, person)

    } catch (error) {
      throw error
    }
  }

  async deletarUsuario(userId){
    try {
      const person = await PersonDAL.getUserById(userId)

      if(!person) throw "Usuário não encontrado!"
      
      await PersonDAL.deleteUser(userId, person)
      return person.email

    } catch (error) {
      throw error
    }
  }

}

export default new PersonBLL()
