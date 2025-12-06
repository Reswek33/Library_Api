import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthorModule } from './author/author.module';
import { CategoryModule } from './category/category.module';
import { BorrowModule } from './borrow/borrow.module';

import { Book } from './books/books.entity';
import { User } from './user/User.entity';
import { Author } from './author/author.entity';
import { Category } from './category/category.entity';
import { Borrow } from './borrow/borrowBook.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123',
      database: 'library',
      entities: [Book, Author, User, Category, Borrow],
      synchronize: true,
      ssl: false,
    }),
    BooksModule,
    UserModule,
    AuthModule,
    AuthorModule,
    CategoryModule,
    BorrowModule,
  ],
})
export class AppModule {}
