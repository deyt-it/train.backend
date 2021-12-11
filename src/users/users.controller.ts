import { Controller, Get, Post, Param, Body, ParseIntPipe, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('searchAll')
    searchAll(): Promise<Array<Object>> {
        return this.usersService.findAll()
    }
    @Get(':id')
    search(@Param('id', ParseIntPipe) id: number): Object {
        return this.usersService.findOne(id)
    }
    @Post('create')
    create(@Body() createUserDto: CreateUserDto): Promise<Array<Object>> {
        return this.usersService.create(createUserDto)
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<Array<Object>> {
        return this.usersService.update(id, updateUserDto)
    }
    @Delete(':id')
    delete(@Param('id') id: number): Promise<Array<Object>> {
        return this.usersService.delete(id)
    }

    @Get('hello')
    getHello(): string {
        return this.usersService.getHello();
    }
}
