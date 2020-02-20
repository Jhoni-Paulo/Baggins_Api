import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'

class Pessoa extends Model{
    static init(sequelize) {
        super.init(
        {
            nome: Sequelize.STRING,
            email: Sequelize.STRING,
            senha: Sequelize.VIRTUAL,
            senhaHash: Sequelize.STRING,
            idTipoPessoa: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            idContato: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            }
        },
        {
            sequelize
        })

        this.addHook('beforeSave', async (pessoa) => {
            if (pessoa.senha) pessoa.senhaHash = await bcrypt.hash(pessoa.senha, 12)              
        })
    }

    verificarSenha(senha) {
        return bcrypt.compare(senha, this.senhaHash)
    }
}

export default Pessoa