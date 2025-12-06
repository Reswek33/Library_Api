import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import {BookService } from './books.service';
import { createBookDto } from './dto/createBook.dto';
@Controller('books')
export class BookController {
     constructor(private readonly bookService: BookService) {}

    @Post()
  createBook(@Body() CreateBookDto: createBookDto) {
    
      return this.bookService.create(CreateBookDto);
  }

    @Get()
    findAll(){
        return this.bookService.findAll();

    }
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.bookService.findOne(Number(id));

    }
      @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<createBookDto>) {
    return this.bookService.update(Number(id), updateData);
  }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.bookService.remove(id)
        

    }
}
