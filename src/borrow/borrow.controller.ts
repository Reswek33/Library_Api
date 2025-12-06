import { Controller,Post, Get,Body, Param, Delete, Put } from '@nestjs/common';
import { BorrowService } from './borrow.service';
import { createBorrowBookDto } from './dto/createBorrow.dto';
import { Borrow } from './borrowBook.entity';
import { updateBorrowDto } from './dto/updateBorrow.dto';
@Controller('borrow')
export class BorrowController {
    constructor(private readonly borrowService: BorrowService){}
    @Post()
    createBorrow(@Body() CreateBorrowBookDto: createBorrowBookDto){
        return this.borrowService.create(CreateBorrowBookDto)
    }
    @Get()
    findAll(): Promise<Borrow[]>{
        return this.borrowService.findAll()
    }
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.borrowService.findOne(id)

    }
    @Delete(':id')
    remove(@Param('id') id: number){
        return this.borrowService.remove(id)
    }
    @Put()
    update(@Param('id') id: number,@Body() update: Partial<updateBorrowDto>){
        return this.borrowService.update(id, update)
    }

}
