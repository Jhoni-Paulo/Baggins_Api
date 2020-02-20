import jwt from 'jsonwebtoken'
import { SessaoBLL, PessoaBLL } from '../../bll'
import authConfig from '../../config/auth'

class SessaoController{
  async post(req, res) {

    const {email, senha} = req.body

    try {
      const pessoa = await PessoaBLL.buscarUsuario(email)

      if(!pessoa) return res.status(400).json({ error: "Usuário não encontrado" })

      if(!senha || !(await pessoa.verificarSenha(senha))) return res.status(400).json({ error: "Senha inválida ou inexistente" })

      const { id, nome } = pessoa

      return res.json({
          pessoa: {
              id,
              nome,
              email
          },
          token: jwt.sign({ id }, authConfig.secret, {
              expiresIn: authConfig.expiresIn
          })
      })
    } catch (error) {
      return error
    }
  }
}

export default new SessaoController()
