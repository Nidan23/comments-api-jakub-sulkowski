import { Router, Request, Response } from 'express'
import {makeValidateBody} from 'express-class-validator'
import {CommentModel} from '../model/comment.model'
import {CommentService} from '../service/comment.service'

export class CommentsController{
    public router = Router()

    constructor(
        private commentService: CommentService
    ) {
        this.initRoutes()
    }

    private initRoutes(){
        this.router.get(`/comments`, this.getComments.bind(this))
        this.router.post(`/comments`, makeValidateBody(CommentModel), this.addComment.bind(this))
    }

    private async addComment(request: Request, response: Response): Promise<Response> {
        return response.json(await this.commentService.create(request.body))
    }

    private async getComments(request: Request, response: Response): Promise<Response> {
        return response.json(await this.commentService.findAll())
    }
}