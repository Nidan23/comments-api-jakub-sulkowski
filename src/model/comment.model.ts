import {IsNotEmpty} from 'class-validator'

export class CommentModel {
    id: number

    @IsNotEmpty()
    message: string

    @IsNotEmpty()
    author: string

    createdAt: Date
}