import jwt from 'jsonwebtoken'
import { Pessoa } from '../models'
import authConfig from '../../config/auth'

class SessaoController{
    async post(req, res) {
        
        const {email, senha} = req.body

        const pessoa = await Pessoa.findOne({ where: { email }})

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
    }

    async get(req, res){ 
        SessaoBLL
        res.json() 
    }
}

export default new SessaoController()