import { Person } from "../app/models"

class PersonDAL{

  async getUser(email) {
    try {
      return await Person.findOne( { where: { email} } )
    } catch (error) { throw error }
  }

  async getUserById(id) {
    try {
      return await Person.findByPk(id)
    } catch (error) { throw error }
  }

  async createUser(person) {
    try {
      return await Person.create(person)
    } catch (error) { throw error }
  }

  async updateUser(user, _contextDb) {
      try {
        return await _contextDb.update(user)
      } catch (error) { throw error }
  }

  async deleteUser(userId, _contextDb) {
    try {      
      return await _contextDb.destroy({ where: { id : userId } })
    } catch (error) { throw error }
  }

}

export default new PersonDAL()
