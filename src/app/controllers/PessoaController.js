import * as Yup from 'yup'
import { PessoaBLL } from "../../bll"

class PessoaController {
  async post(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().email().required(),
      senha: Yup.string().required().min(6)
    })

    try {
      if(!(await schema.isValid(req.body))) throw await schema.validate(req.body).catch(err => err.errors)

      const { id, nome, email } = await PessoaBLL.criarUsuario(req.body)
      return res.json({ id, nome, email })
    }
    catch (error) { res.status(400).json({ error }) }
  }

  async put(req, res) {      
      const schema = Yup.object().shape({
        nome: Yup.string(),
        senhaAntiga: Yup.string().min(6),
        senha: Yup.string().min(6),        
        email: Yup.string().email()
      })
  
      try {
        if(!(await schema.isValid(req.body))) throw await schema.validate(req.body).catch(err => err.errors)
  
        const { id, nome, email} = PessoaBLL.atualizarUsuario(req.body)
        return res.json({ id, nome, email })
      }
      catch (error) { res.status(400).json({ error }) }
  }
}

export default new PessoaController()