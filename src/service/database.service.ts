import {Sequelize} from 'sequelize-typescript'
import CommentEntity from '../entity/comment.entity'

const models = [
    CommentEntity
]

export class DatabaseService {
    private static instance?: DatabaseService
    sequelize: Sequelize

    private constructor() {
        this.sequelize = new Sequelize({
                host: 'localhost',
                dialect: 'mysql',
                database: 'comments',
                username: 'root',
                password: 'root',
            }
        )
        this.tryConnect()
    }

    static getInstance() {
        if (!DatabaseService.instance)
            DatabaseService.instance = new DatabaseService()

        return DatabaseService.instance
    }

    private async tryConnect() {
        try {
            await this.sequelize.authenticate()
            this.sequelize.addModels(models)
            await this.sequelize.sync()
            console.log('Connection has been established successfully.')
        } catch (error) {
            console.error('Unable to connect to the database:', error)
        }
    }
}