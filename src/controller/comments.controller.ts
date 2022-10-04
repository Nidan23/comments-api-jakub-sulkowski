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

    private addComment(request: Request, response: Response): Response {
        return response.json(this.commentService.create(request.body.message, request.body.author))
    }

    private getComments(request: Request, response: Response): Response {
        return response.json(this.commentService.findAll())
    }
}