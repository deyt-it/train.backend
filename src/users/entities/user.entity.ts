import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_id: string

    @Column()
    name: string

    @Column()
    number010: string

    @Column()
    password: string
}