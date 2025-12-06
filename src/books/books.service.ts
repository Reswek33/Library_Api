import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book} from './books.entity';
import { Repository } from 'typeorm';
import { updateBookDto } from './dto/updatebook.dto';
import { createBookDto } from './dto/createBook.dto';

@Injectable()
export class BookService {
    constructor(
@InjectRepository(Book)
   private bookRepository: Repository<Book>) {}

async create(createBookDto: createBookDto): Promise<Book>{
        const book = this.bookRepository.create(createBookDto)
        return await this.bookRepository.save(book)
}

async findAll(): Promise<Book[]> {
  return await this.bookRepository.find();
}


  async findOne(id: number): Promise<Book | null> {
    return await this.bookRepository.findOneBy({ id });
  }

  async update(id: number, updateData: Partial<updateBookDto>): Promise<Book |null> {
    await this.bookRepository.update(id, updateData);
    return await this.bookRepository.findOneBy({ id });
  }
async remove(id: number): Promise<void>{
    await this.bookRepository.delete(id);

}
}
