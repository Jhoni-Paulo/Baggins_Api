import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'

class Person extends Model{
    static init(sequelize) {
        super.init(
        {
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            passwordHash: Sequelize.STRING,
            idPersonType: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            idContact: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            }
        },
        {
            sequelize
        })

        this.addHook('beforeSave', async (person) => {
            if (person.password) person.passwordHash = await bcrypt.hash(person.password, 12)              
        })
    }

    static associate(models) {
        this.belongsTo(models.File, { foreignKey: 'avatarId' })
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.passwordHash)
    }
}

export default Person