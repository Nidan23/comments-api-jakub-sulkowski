import {CommentModel} from '../model/comment.model'
import CommentEntity from '../entity/comment.entity'

export class CommentService {
  private static instance?: CommentService
  private constructor() {}

  static getInstance() {
    if (!CommentService.instance)
      CommentService.instance = new CommentService()

    return CommentService.instance
  }

  create(commentData: CommentModel) {
    const { message, author } = commentData
    return CommentEntity.create({ message, author, createdAt: new Date() })
  }

  findAll(): Promise<CommentEntity[]> {
    return CommentEntity.findAll()
  }
}
