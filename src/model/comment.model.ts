import {IsNotEmpty} from 'class-validator'

export class CommentModel {
    @IsNotEmpty()
    message: string

    @IsNotEmpty()
    author: string
}