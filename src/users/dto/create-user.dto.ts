import { IsString } from 'class-validator'

export class CreateUserDto{
    @IsString()
    user_id: string

    @IsString()
    name: string

    @IsString()
    number010: string
    
    @IsString()
    password: string
}