import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {User} from './entity/user.entity'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ){}


    findAll(): Promise<User[]>{
        return this.usersRepository.find()
    }
    findOne(id: number): Promise<User>{
        const user = this.usersRepository.findOne(id)

        // const user = users.filter(user => user.id==id)
        // if (user.length==0) {
        //     throw new NotFoundException()
        // }
        
        return user
    }
    async create(createUserDto: CreateUserDto): Promise<any>{
        const newUser: User = await this.usersRepository.create(createUserDto)
        await this.usersRepository.insert(newUser)

        // users.push({
        //     id: users.length, 
        //     user_id: createUserDto.user_id, 
        //     name: createUserDto.name, 
        //     number010: createUserDto.number010, 
        //     password: createUserDto.password, 
        // })
        
        // return this.usersRepository.find()
    }
    async update(id: number, updateUserDto: UpdateUserDto): Promise<any>{
        let user: User = await this.usersRepository.findOne(id)
        user = Object.assign(user, updateUserDto)
        await this.usersRepository.save(user)

        // const idx = users.findIndex(user=>user.id==id)
        // if (idx==-1) {
        //     throw new NotFoundException
        // }
        // users[idx] = Object.assign(users[idx], updateUserDto)

        // return this.usersRepository.find()
    }
    async delete(id: number): Promise<any>{
        await this.usersRepository.delete(id)

        // const idx = users.findIndex(user=>user.id==id)
        // if (idx==-1) {
        //     throw new NotFoundException
        // }
        // users.splice(idx, 1)

        // return this.usersRepository.find()
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