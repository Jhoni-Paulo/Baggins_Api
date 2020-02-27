import { PersonBLL } from "."
import authConfig from '../config/auth'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


class SessionBLL{

    async userAuthenticate(email, password) {
        try {
            const person = await PersonBLL.getUser(email)

            if(!person) throw "Usuário não encontrado"

            if(!password || !this._verificarSenha(password, person.passwordHash)) throw "Senha inválida ou inexistente"
            
            const { id, name } = person
            
            return {
                user: {
                    id,
                    name,
                    email
                },
                token: jwt.sign({ id }, authConfig.secret, {
                    expiresIn: authConfig.expiresIn
                })
            }
        } catch (error) { throw error }        
    }

    _verificarSenha(password, passwordHash) { return bcrypt.compare(password, passwordHash) }

}

export default new SessionBLL()
