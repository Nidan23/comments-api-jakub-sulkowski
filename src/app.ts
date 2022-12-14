import * as express  from 'express'
import { Application } from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

export default class App {
    public app: Application
    public port: number

    constructor(
        controllers: any[],
        port: number) {
        this.app = express()
        this.port = port

        this.initMiddlewares()
        this.initControllers(controllers)
    }

    private initMiddlewares(){
        this.app.use(bodyParser.json())
        this.app.use(cors({
            origin: '*'
        }))
    }

    private initControllers(controllers: any[]){
        controllers.forEach((controller: any) => {
            this.app.use('/', controller.router)
        })
    }

    public listen(){
        this.app.listen(this.port, () => {
            console.log(`App is running on ${this.port}`)
        })
    }
}