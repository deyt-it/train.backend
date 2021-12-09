import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    async findAll(){
        return users
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
        users[idx] = Object.assign(users[idx], updateUserDto)

        return users
    }
    
    getHello(): string {
        return 'Hello World!';
    }
}


let users = [
    {
        "id": 0, 
        "user_id": "deyt", 
        "name": "김지연", 
        "number010": "01055216740", 
        "password": "000"
    }, 
    {
        "id": 1, 
        "user_id": "deyt1", 
        "name": "김지연1", 
        "number010": "01055216741", 
        "password": "001"
    }
]
