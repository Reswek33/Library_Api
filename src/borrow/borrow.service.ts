
import { Borrow } from './borrowBook.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import {  createBorrowBookDto } from './dto/createBorrow.dto';
import { updateBorrowDto } from './dto/updateBorrow.dto';


@Injectable()
export class BorrowService {
     constructor(
   @InjectRepository(Borrow)
      private borrowRepository: Repository<Borrow>) {}
       async create(CreateBorrowBookDto: createBorrowBookDto): Promise<Borrow> {
        const borrow = this.borrowRepository.create(CreateBorrowBookDto);
        
        return await this.borrowRepository.save(borrow)
       }
       async findAll():Promise<Borrow[]>{
        return await this.borrowRepository.find()
       }
       async findOne(id: number):Promise<Borrow | null>{
        return await this.borrowRepository.findOneBy({ id })
       }
      async remove(id: number): Promise<void>{
         await this.borrowRepository.delete(id)
       }
       async update(id: number, updateData: Partial<updateBorrowDto>): Promise<Borrow |null> {
          await this.borrowRepository.update(id, updateData);
          return await this.borrowRepository.findOneBy({ id });
        }
}
