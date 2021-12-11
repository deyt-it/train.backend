import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {User} from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ){}


    async findAll(): Promise<User[]>{
        // 하는중...
        return this.usersRepository
    }
    async findOne(id: number){
        const user = users.filter(user => user.id==id)
        if (user.length==0) {
            throw new NotFoundException()
        }
        
        return user
    }
    async create(createUserDto: CreateUserDto){
        users.push({
            id: users.length, 
            user_id: createUserDto.user_id, 
            name: createUserDto.name, 
            number010: createUserDto.number010, 
            password: createUserDto.password, 
        })
        
        return users
    }
    async update(id: number, updateUserDto: UpdateUserDto){
        const idx = users.findIndex(user=>user.id==id)
        if (idx==-1) {
            throw new NotFoundException
        }
        users[idx] = Object.assign(users[idx], updateUserDto)

        return users
    }
    async delete(id: number){
        const idx = users.findIndex(user=>user.id==id)
        if (idx==-1) {
            throw new NotFoundException
        }
        users.splice(idx, 1)

        return users
    }
    
    getHello(): string {
        return 'Hello World!';
    }
}


// let users = [
//     {
//         "id": 0, 
//         "user_id": "deyt", 
//         "name": "김지연", 
//         "number010": "01055216740", 
//         "password": "000"
//     }, 
//     {
//         "id": 1, 
//         "user_id": "deyt1", 
//         "name": "김지연1", 
//         "number010": "01055216741", 
//         "password": "001"
//     }
// ]