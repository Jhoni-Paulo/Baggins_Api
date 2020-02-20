import { PessoaBLL } from "../../bll"


class PessoaController {
    async post(req, res) {
      try {
        const { id, nome, email } = await PessoaBLL.criarUsuario(req.body)
        return res.json({ id, nome, email })
      }
      catch (error) { res.status(400).json({ error }) }
    }
}

export default new PessoaController()
