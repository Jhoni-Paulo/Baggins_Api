import Sequelize from 'sequelize'
import { Person, File } from '../app/models'

import databaseConfig from '../config/database'

const models = [Person, File]

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(databaseConfig)

        models.map(model => model.init(this.connection))
        models.map(model => model.associate && model.associate(this.connection.models))
    }
}

export default new Database()