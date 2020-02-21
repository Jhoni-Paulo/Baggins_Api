import { PessoaBLL } from "."
import authConfig from '../config/auth'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


class SessaoBLL{

    async autenticarUsuario(email, senha) {
        try {
            const pessoa = await PessoaBLL.buscarUsuario(email)

            if(!pessoa) throw "Usuário não encontrado"

            if(!senha || !this._verificarSenha(senha, pessoa.senhaHash)) throw "Senha inválida ou inexistente"
            
            const { id, nome } = pessoa
            
            return {
                usuario: {
                    id,
                    nome,
                    email
                },
                token: jwt.sign({ id }, authConfig.secret, {
                    expiresIn: authConfig.expiresIn
                })
            }
        } catch (error) { throw error }        
    }

    _verificarSenha(senha, senhaHash) { return bcrypt.compare(senha, senhaHash) }

}

export default new SessaoBLL()
