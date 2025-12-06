import { Body, Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){ }
    @Post()
    createUser(@Body() createUserDto: createUserDto){
        return (this.userService as any).create(createUserDto);
    }
    @Get()
    findUser(){
        return this.userService.find()
    }
    @Get(':id')
    findOneUser(@Param('id') id: number){
        return this.userService.findOne(id);

    }
    @Delete(':id')
    remove(@Param('id') id: number){
        return this.userService.remove(id)

    }
    @Put(':id')
    update(@Param('id') id:number, @Body() updateuserDto: Partial<createUserDto>){
        return this.userService.update(id, updateuserDto);
    }
}


