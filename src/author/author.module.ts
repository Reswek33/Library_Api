import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorService } from 'src/author/author.service';
import { AuthorController } from 'src/author/author.controller';
import { User } from 'src/user/User.entity';
import { Author } from 'src/author/author.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Author]),  // <-- REQUIRED
  ],
  providers: [AuthorService],
  controllers: [AuthorController],
  exports: [AuthorService],
})
export class AuthorModule {}
