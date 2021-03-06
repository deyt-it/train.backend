import {PartialType} from '@nestjs/mapped-types'
import { CreateUserDto } from './create-user.dto';
import { IsString } from 'class-validator'

export class UpdateUserDto extends PartialType(CreateUserDto){
    @IsString()
    user_id: string

    @IsString()
    name: string

    @IsString()
    number010: string
    
    @IsString()
    password: string
}