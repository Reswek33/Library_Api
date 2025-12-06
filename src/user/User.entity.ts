import { OneToMany, ManyToMany } from "typeorm";
import { Column } from "typeorm";
import { Entity, PrimaryColumn } from "typeorm";
import { Book } from "src/books/books.entity";

import { Borrow } from "src/borrow/borrowBook.entity";


@Entity()

export class User{
    @PrimaryColumn()
    id: number;

    @Column()
    userName: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    role: String;
 @ManyToMany(() => Book, (books) => books.user)
books: Book[];

@OneToMany(()=> Borrow, (borrow) => borrow.user)
borrow : Borrow[];

}