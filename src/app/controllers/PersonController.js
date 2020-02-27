import PersonValidation from '../validations/PersonValidation'
import { PersonBLL } from "../../bll"

class PersonController {

  async post(req, res) {

    try {    
      const { isValid, message } = await PersonValidation.post(req.body)
      if(!isValid) throw message

      const { id, name, email } = await PersonBLL.createUser(req.body)
      return res.json({ id, name, email })
    }
    catch (error) { res.status(400).json({ error }) }
  }

  async put(req, res) {      
    try {
      const { isValid, message } = await PersonValidation.put(req.body)
      if(!isValid) throw message

      const { id, name, email} = await PersonBLL.updateUser(req.body, req.userId)
      return res.json({ id, name, email })
    }
    catch (error) { res.status(400).json({ error }) }
  }

  async delete(req, res) {      
    try {
      return res.json(`${await PersonBLL.deletarUsuario(req.userId)} deletado com sucesso!`)
    }
    catch (error) { res.status(400).json({ error }) }
  }

}

export default new PersonController()