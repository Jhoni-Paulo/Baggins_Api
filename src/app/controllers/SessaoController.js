import * as Yup from 'yup'
import { SessaoBLL } from '../../bll'

class SessaoController{
  
  async post(req, res) {    
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      senha: Yup.string().required().min(6)
    })

    const {email, senha} = req.body
    try {
      if(!(await schema.isValid(req.body))) throw await schema.validate(req.body).catch(err => err.errors)
        
      return res.json(await SessaoBLL.autenticarUsuario(email, senha))
    } catch (error) { return res.status(400).json({ error }) }

  }

}

export default new SessaoController()
