
import { Author } from 'src/author/author.entity';
import {User } from 'src/user/User.entity'
import { Category } from 'src/category/category.entity';
import {  Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Borrow } from 'src/borrow/borrowBook.entity';
@Entity()

export class Book{
    @PrimaryGeneratedColumn()
     id: number;
     @Column()
     title: string;
       
    @Column({default: 0})
     publishedYear: number;
     @Column()
     publisher: string;
     
@ManyToOne(() => Author, (author) => author.books)
author: Author;
@ManyToMany(() => Category, (category) => category.books)
@JoinTable()
categories: Category[] 
@ManyToOne(() => User, (user) => user.books)
user: User;

@OneToMany(() => Borrow, (borrow) => borrow.books)
borrow: Borrow[];


}






