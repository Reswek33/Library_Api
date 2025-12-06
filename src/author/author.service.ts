import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';
import { CreateAuthorDto } from './dto/createAuthor.dto';
import { UpdateAuthorDto } from './dto/updateAuthor.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

 async  create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = this.authorRepository.create(createAuthorDto); 
    return await this.authorRepository.save(author); 
  }

  async findAll(): Promise<Author[]> {
    return await this.authorRepository.find(); 
  }

  async findOne(id: number): Promise<Author | null> {
     return  await this.authorRepository.findOne({ where: { id } }); 
  }
  async remove(id: number): Promise<void>{
    await this.authorRepository.delete(id);
  }
  async update(id: number, updateData: Partial<UpdateAuthorDto>):Promise<Author | null>{
    await this.authorRepository.update(id, updateData);
    return await this.authorRepository.findOneBy({id})


  }
}

