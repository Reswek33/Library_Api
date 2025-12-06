import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { CreateAuthorDto } from './dto/createAuthor.dto';
import { AuthorService } from './author.service';
import { UpdateAuthorDto } from './dto/updateAuthor.dto';

@Controller('author') // Use plural for consistency
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }
  @Get()
  findAll(){
    return this.authorService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number){
    return this.authorService.findOne(id);
  }
  @Delete(':id')
  remove(@Param('id') id: number){
     this.authorService.remove(id);
  }
@Put()
update(@Param('id') id:number,@Body() UpdateData: Partial<UpdateAuthorDto>){
  return this.authorService.update(id, UpdateData)

}
}

