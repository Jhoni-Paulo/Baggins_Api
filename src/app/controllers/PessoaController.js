import { Pessoa } from "../models"

class PessoaController {
    async post(req, res) {
        const isPessoa = await Pessoa.findOne({ where: { email: req.body.email } })
        
        if (isPessoa)
            return res.status(400).json({ error: 'Usuario já existe' })

        const { id, nome, email } = await Pessoa.create(req.body)
        
        return res.json({
            id,
            nome,
            email
        })
    }
}

export default new PessoaController()