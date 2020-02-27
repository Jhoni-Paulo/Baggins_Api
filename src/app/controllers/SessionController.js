import * as Yup from 'yup'
import { SessionBLL } from '../../bll'

class SessionController{
  
  async post(req, res) {    
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6)
    })

    const {email, password} = req.body
    try {
      if(!(await schema.isValid(req.body))) throw await schema.validate(req.body).catch(err => err.errors)
        
      return res.json(await SessionBLL.userAuthenticate(email, password))
    } catch (error) { return res.status(400).json({ error }) }

  }

}

export default new SessionController()
