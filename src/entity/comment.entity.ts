import {AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from 'sequelize-typescript'

@Table({
    timestamps: false
})
export default class CommentEntity extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number

    @Column(DataType.STRING)
    message: string

    @Column(DataType.STRING)
    author: string

    @Column(DataType.DATE)
    createdAt: Date
}