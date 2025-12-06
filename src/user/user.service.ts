import { Injectable } from '@nestjs/common';
import { Injector } from '@nestjs/core/injector/injector';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './User.entity';
import { createUserDto } from './dto/createUser.dto';
import { updateuserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>){}
        async create(CreateUserDto: createUserDto):Promise<User>{
            const user=  this.userRepository.create(CreateUserDto);
            return await this.userRepository.save(user);
        }
        async find():Promise<User[]>{
            return await this.userRepository.find()
        }
        async findOne(id: number):Promise<User | null>{
            return await this.userRepository.findOneBy({id});
        }
   async remove(id: number): Promise<void>{
    await this.userRepository.delete(id);

}
async update(id: number, update:Partial<updateuserDto>):Promise<User|null>{
 await this.userRepository.update(id, update);
 return await this.userRepository.findOne({ where: { id } })
}
        
}
