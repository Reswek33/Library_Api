import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { createCategoryDto } from './dto/createCategory.dto';
import { updateCategoryDto } from './dto/updateCategory.dto';

@Injectable()
export class CategoryService  {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>){}
     async create(createCategoryDto: createCategoryDto): Promise<Category>{
             const category = this.categoryRepository.create(createCategoryDto)
             return await this.categoryRepository.save(category)
     }
     async findAll():Promise<Category[]>{
        return await this.categoryRepository.find()
     }
     async findOne(id: number):Promise<Category | null>{
        return await this.categoryRepository.findOneBy({id})
     }
     async remove(id: number):Promise<void>{
          await this.categoryRepository.delete({id})
     }
     async update(id: number, updateData: Partial<updateCategoryDto>):Promise<Category | null>{
        await this.categoryRepository.update(id, updateData)
        return await this.categoryRepository.findOneBy({id})
     }

}
