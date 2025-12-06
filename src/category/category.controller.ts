import { Controller, Get, Param, Post, Put, Query, Body} from '@nestjs/common';
import { CategoryService } from './category.service';
import { updateCategoryDto } from './dto/updateCategory.dto';
import { createCategoryDto } from './dto/createCategory.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService ){}
    @Post()
    create(@Body() CreateCategoryDto: createCategoryDto){
        return this.categoryService.create(CreateCategoryDto)
        
    }
    @Get()
    findAll(@Query('name') name: string){
        
    }
    @Get(':id')
    findOne(@Param('id') id: number){

     }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateData: Partial<updateCategoryDto>){

    }

}
