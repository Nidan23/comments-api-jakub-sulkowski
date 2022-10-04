import {CommentModel} from '../model/comment.model'

export class CommentService {
  private counter: number = 0
  private static instance?: CommentService
  private constructor() {}

  static getInstance() {
    if (!CommentService.instance)
      CommentService.instance = new CommentService()

    return CommentService.instance
  }

  create(message: string, author: string ) {
    return this.createCommentEntity(message, author)
  }

  findAll() {
    return [
      { id: 1, message: 'Message 1', author: 'Jan', createdAt: new Date() },
      { id: 2, message: 'Message 2', author: 'Karol', createdAt: new Date() },
      { id: 3, message: 'Message 3', author: 'Karol', createdAt: new Date() },
    ];
  }

  private createCommentEntity(message: string, author: string): CommentModel {
    const comment = new CommentModel()

    comment.id = this.counter
    comment.message = message
    comment.author = author
    comment.createdAt = new Date()

    this.counter += 1

    return comment
  }
}
