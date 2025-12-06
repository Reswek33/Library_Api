import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Borrow } from './borrowBook.entity';
import { BorrowService } from './borrow.service';
import { BorrowController } from './borrow.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Borrow])],
  providers: [BorrowService],
  controllers: [BorrowController],
  exports: [TypeOrmModule],
})
export class BorrowModule {}
