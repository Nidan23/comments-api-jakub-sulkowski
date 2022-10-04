import App from './src/app'
import {CommentsController} from './src/controller/comments.controller'
import {CommentService} from './src/service/comment.service'

const commentService: CommentService = CommentService.getInstance()

const controllers = [
    new CommentsController(commentService)
]

export const app = new App(
    controllers,
    parseInt(process.env.SERVER_PORT || '3000'),
)

app.listen()