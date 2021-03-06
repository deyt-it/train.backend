import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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
        // if (user==null) { throw new BadRequestException }

        // const user = users.filter(user => user.id==id)
        // if (user.length==0) {
        //     throw new NotFoundException()
        // }
        
        return this.getUser(id)
    }
    async create(createUserDto: CreateUserDto): Promise<any>{
        const newUser: User = await this.usersRepository.create(createUserDto)
        this.usersRepository.insert(newUser)

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
        const userToBeUpdated = await this.getUser(id)
        if (userToBeUpdated==null) { throw new BadRequestException }
        const user = Object.assign(userToBeUpdated, updateUserDto)
        this.usersRepository.save(user)

        // const idx = users.findIndex(user=>user.id==id)
        // if (idx==-1) {
        //     throw new NotFoundException
        // }
        // users[idx] = Object.assign(users[idx], updateUserDto)

        // return this.usersRepository.find()
    }
    async delete(id: number): Promise<any>{
        const user = await this.getUser(id)
        if (user==null) { throw new BadRequestException }
        this.usersRepository.delete(id)

        // const idx = users.findIndex(user=>user.id==id)
        // if (idx==-1) {
        //     throw new NotFoundException
        // }
        // users.splice(idx, 1)

        // return this.usersRepository.find()
    }

    async getUser(id): Promise<any> {
        if (id==NaN) { return null }
        let user: User = await this.usersRepository.findOne(id)
        if (user==null || user==undefined) { return null }
        return user
    }
    
    getHello(): string {
        return 'Hello World!';
    }
}


// let users = [
//     {
//         "id": 0, 
//         "user_id": "deyt", 
//         "name": "?????????", 
//         "number010": "01055216740", 
//         "password": "000"
//     }, 
//     {
//         "id": 1, 
//         "user_id": "deyt1", 
//         "name": "?????????1", 
//         "number010": "01055216741", 
//         "password": "001"
//     }
// ]